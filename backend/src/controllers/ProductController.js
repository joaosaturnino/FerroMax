const db = require('../config/database');

const ProductController = {
  // Busca todos os produtos ou filtra por lançamentos/ofertas
  async getProducts(req, res) {
    try {
      const { is_novo, is_oferta, limit } = req.query;
      let query = `
  SELECT p.*, m.nome as marca_nome 
  FROM produtos p
  JOIN marcas m ON p.marca_id = m.id
  WHERE 1=1
`;
      let params = [];
      
      if (is_novo === 'true') {
        query += ' AND is_novo = true';
      }
      if (is_oferta === 'true') {
        query += ' AND is_oferta = true';
      }
      
      query += ' ORDER BY criado_em DESC';
      
      if (limit) {
        query += ` LIMIT $1`;
        params.push(limit);
      }

      const { rows } = await db.query(query, params);
      res.json(rows);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },

  // Busca um produto específico pelo ID
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const { rows } = await db.query('SELECT * FROM produtos WHERE id = $1', [id]);
      
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      res.json(rows[0]);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
};

module.exports = ProductController;