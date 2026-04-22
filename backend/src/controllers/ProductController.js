const db = require('../config/database');

const ProductController = {
  async getProducts(req, res) {
    try {
      const { is_novo, is_oferta, limit } = req.query;
      
      let query = `
        SELECT p.*, m.nome as marca_nome, c.nome as categoria_nome 
        FROM produtos p
        JOIN marcas m ON p.marca_id = m.id
        JOIN categorias c ON p.categoria_id = c.id
        WHERE 1=1
      `;
      let params = [];
      
      if (is_novo === 'true') {
        query += ' AND p.is_novo = true';
      }
      if (is_oferta === 'true') {
        query += ' AND p.is_oferta = true';
      }
      
      query += ' ORDER BY p.criado_em DESC';
      
      if (limit) {
        query += ` LIMIT ?`; // Sintaxe MySQL
        params.push(Number(limit)); // MySQL exige que o limite seja um número
      }

      const [rows] = await db.query(query, params);
      
      // O MySQL devolve 1/0 para booleanos. Vamos formatar para true/false para o React.
      const formattedRows = rows.map(row => ({
        ...row,
        is_novo: row.is_novo === 1,
        is_oferta: row.is_oferta === 1
      }));

      res.json(formattedRows);
    } catch (error) {
      console.error('Erro na listagem:', error);
      res.status(500).json({ error: 'Erro no servidor' });
    }
  },

  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const query = `
        SELECT p.*, m.nome as marca_nome, c.nome as categoria_nome 
        FROM produtos p
        JOIN marcas m ON p.marca_id = m.id
        JOIN categorias c ON p.categoria_id = c.id
        WHERE p.id = ?
      `;
      const [rows] = await db.query(query, [id]);
      
      if (rows.length === 0) return res.status(404).json({ error: 'Produto não encontrado' });
      
      const product = rows[0];
      product.is_novo = product.is_novo === 1;
      product.is_oferta = product.is_oferta === 1;

      res.json(product);
    } catch (error) {
      console.error('Erro no detalhe:', error);
      res.status(500).json({ error: 'Erro no servidor' });
    }
  }
};

module.exports = ProductController;