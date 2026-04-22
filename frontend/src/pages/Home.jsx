import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import './Home.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/products?limit=4');
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <div className="hero-pill">⚡ Qualidade Profissional</div>
          <h1 className="hero-title">A Ferramenta certa para o seu <span>Sucesso</span></h1>
          <p>Equipamentos de alta performance para quem não aceita menos que a perfeição.</p>
          <button className="btn-main">Explorar Catálogo</button>
        </div>
      </section>

      <section className="section">
        <div className="sec-head">
          <h2 className="sec-title">Produtos em <em>Destaque</em></h2>
        </div>
        
        {loading ? (
          <div className="loading">Carregando ferramentas...</div>
        ) : (
          <div className="prod-grid">
            {products.map(p => (
              <ProductCard key={p.id} product={{
                ...p,
                brand: p.marca_nome || 'FerroMax',
                icon: p.icone_imagem,
                price: p.preco_venda
              }} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}