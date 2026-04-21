import React, { useState, useEffect } from 'react';
import api from '../services/api'; // Nossa instância do Axios
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import './Home.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função assíncrona para buscar os produtos no back-end
    async function fetchProducts() {
      try {
        // Busca os produtos na nossa API Node.js limitando a 4 para a home
        const response = await api.get('/products?limit=4');
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-gear">⚙</div>
        <div className="hero-left">
          <div className="hero-eyebrow">
            <div className="hero-pill">⚡ Semana das ferramentas</div>
          </div>
          <h1 className="hero-h1">
            <span className="line1">Ferramenta</span><br />
            <span className="line2">de qualidade</span><br />
            <span className="line3">pra todo serviço</span>
          </h1>
          <div className="hero-ctas">
            <button className="btn-main">Ver catálogo completo →</button>
          </div>
        </div>
      </section>

      {/* GRID DE PRODUTOS DINÂMICO */}
      <section className="section section-border">
        <div className="sec-head">
          <div>
            <div className="tag">Mais vendidos</div>
            <div className="title">Produtos em <em>destaque</em></div>
          </div>
          <button className="see-all">Ver todos →</button>
        </div>
        
        {loading ? (
          <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--steel)' }}>
            Carregando produtos...
          </p>
        ) : (
          <div className="prod-grid">
            {products.map((product) => {
              // Formatando as badges dinamicamente com base no banco
              const badges = [];
              if (product.is_oferta) badges.push({ type: 'badge-hot', text: 'Oferta' });
              if (product.is_novo) badges.push({ type: 'badge-new', text: 'Novo' });
              
              // Montando o objeto que o ProductCard espera
              const formattedProduct = {
                id: product.id,
                icon: product.icone_imagem,
                badges: badges,
                brand: product.marca_nome || 'Marca', // Idealmente sua query SQL deve fazer um JOIN com a tabela de marcas
                name: product.nome,
                rating: '★'.repeat(Math.round(product.rating_medio)) + '☆'.repeat(5 - Math.round(product.rating_medio)),
                reviews: product.total_reviews,
                oldPrice: product.preco_original,
                price: product.preco_venda,
                installments: `12x de R$ ${(product.preco_venda / 12).toFixed(2).replace('.', ',')} sem juros`
              };

              return <ProductCard key={product.id} product={formattedProduct} />;
            })}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}