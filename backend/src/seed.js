const db = require('./config/database');

async function runSeed() {
  console.log("⏳ A preparar a estrutura da base de dados MySQL...");
  try {
    // Desativa a verificação de Foreign Keys para conseguir dar DROP às tabelas
    await db.query('SET FOREIGN_KEY_CHECKS = 0;');
    await db.query('DROP TABLE IF EXISTS pedido_itens, pedidos, produtos, marcas, categorias, usuarios;');
    await db.query('SET FOREIGN_KEY_CHECKS = 1;');

    await db.query(`
      CREATE TABLE categorias (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        icone VARCHAR(10),
        slug VARCHAR(100) UNIQUE NOT NULL
      );
    `);

    await db.query(`
      CREATE TABLE marcas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL UNIQUE
      );
    `);

    await db.query(`
      CREATE TABLE produtos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        categoria_id INT NOT NULL,
        marca_id INT NOT NULL,
        nome VARCHAR(255) NOT NULL,
        descricao TEXT,
        preco_original DECIMAL(10,2),
        preco_venda DECIMAL(10,2) NOT NULL,
        estoque INT DEFAULT 0,
        rating_medio DECIMAL(3,2) DEFAULT 0.00,
        total_reviews INT DEFAULT 0,
        is_novo BOOLEAN DEFAULT FALSE,
        is_oferta BOOLEAN DEFAULT FALSE,
        icone_imagem VARCHAR(255),
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (categoria_id) REFERENCES categorias(id),
        FOREIGN KEY (marca_id) REFERENCES marcas(id)
      );
    `);

    console.log("⏳ A inserir inventário de teste...");
    
    await db.query(`
      INSERT INTO categorias (nome, icone, slug) VALUES 
      ('Ferramentas Elétricas', '🔋', 'ferramentas-eletricas'),
      ('Ferramentas Manuais', '🪛', 'ferramentas-manuais'),
      ('Kits e Conjuntos', '🧰', 'kits-e-conjuntos');
    `);

    await db.query(`
      INSERT INTO marcas (nome) VALUES ('Bosch'), ('DeWalt'), ('Makita'), ('Stanley');
    `);

    await db.query(`
      INSERT INTO produtos (categoria_id, marca_id, nome, descricao, preco_original, preco_venda, estoque, rating_medio, total_reviews, is_novo, is_oferta, icone_imagem) VALUES 
      (1, 1, 'Parafusadeira/Furadeira GSR 12V-30', 'Parafusadeira de alta performance ideal para uso intensivo.', 499.00, 389.00, 50, 4.9, 482, false, true, '🪛'),
      (1, 2, 'Chave de Impacto 1/2" 800Nm DCF899P2', 'Força bruta para trabalhos pesados com bateria de longa duração.', 1499.00, 1249.00, 25, 4.8, 318, true, false, '🔧'),
      (1, 3, 'Serra Circular 7-1/4" 1.800W', 'Cortes limpos e precisos em madeira.', NULL, 679.00, 15, 4.2, 201, true, false, '🪚'),
      (3, 4, 'Kit Ferramentas 42 peças', 'O kit completo para manutenções gerais e redes.', 289.00, 219.00, 100, 4.7, 647, false, true, '🔨');
    `);

    console.log("✅ Sistema integrado! Base de dados populada no MySQL e pronta a usar.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Ocorreu um erro técnico:", error);
    process.exit(1);
  }
}

runSeed();