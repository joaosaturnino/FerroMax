const db = require('../config/database');

const CategoryController = {
  async getCategories(req, res) {
    try {
      const query = 'SELECT id, nome, icone, slug FROM categorias ORDER BY nome ASC';
      const [rows] = await db.query(query); // <-- Extração com array [rows]
      
      res.json(rows);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      res.status(500).json({ error: 'Erro interno do servidor ao carregar categorias' });
    }
  }
};

module.exports = CategoryController;