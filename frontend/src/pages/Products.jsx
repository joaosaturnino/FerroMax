import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/products'); // Sem limite para trazer todos
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao carregar o catálogo:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <main className="section section-border" style={{ minHeight: '70vh', padding: '2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '0.5rem' }}>Catálogo Completo</h1>
          <p style={{ color: 'var(--steel)' }}>Explore todas as nossas ferramentas e equipamentos.</p>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--steel)' }}>A carregar catálogo...</p>
        ) : (
          <div className="prod-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {products.map(product => {
              const badges = [];
              if (product.is_oferta) badges.push({ type: 'badge-hot', text: 'Oferta' });
              if (product.is_novo) badges.push({ type: 'badge-new', text: 'Novo' });

              const formattedProduct = {
                id: product.id,
                icon: product.icone_imagem,
                badges: badges,
                brand: product.marca_nome || 'FerroMax',
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
      </main>
      <Footer />
    </>
  );
}