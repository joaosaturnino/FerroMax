import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../hooks/CartContext'; // Importa o hook do carrinho

export default function ProductDetails() {
  const { id } = useParams(); // Pega o ID da URL (ex: /produto/1)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Função de adicionar ao carrinho

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <h2 style={{ textAlign: 'center', padding: '5rem', color: 'var(--white)' }}>Carregando produto...</h2>;
  if (!product) return <h2 style={{ textAlign: 'center', padding: '5rem', color: 'var(--or1)' }}>Produto não encontrado.</h2>;

  return (
    <>
      <Header />
      
      <main className="section section-border" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', minHeight: '60vh' }}>
        {/* Lado Esquerdo: Imagem */}
        <div style={{ background: 'var(--dark4)', borderRadius: 'var(--r12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8rem', minHeight: '400px' }}>
          {product.icone_imagem}
        </div>

        {/* Lado Direito: Informações */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ color: 'var(--or1)', fontFamily: 'var(--font-s)', fontWeight: '700', letterSpacing: '.15em', textTransform: 'uppercase' }}>
            REF: {product.id}
          </span>
          <h1 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-d)', color: 'var(--white)', marginTop: '0.5rem', lineHeight: '1.1' }}>
            {product.nome}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '1rem 0' }}>
            <span style={{ color: 'var(--or1)' }}>{'★'.repeat(Math.round(product.rating_medio))}</span>
            <span style={{ color: 'var(--steel)', fontSize: '0.85rem' }}>({product.total_reviews} avaliações)</span>
          </div>

          <p style={{ color: 'var(--steel2)', lineHeight: '1.6', marginBottom: '2rem' }}>
            {product.descricao}
          </p>

          <div style={{ background: 'var(--dark3)', padding: '1.5rem', borderRadius: 'var(--r8)', border: '1px solid var(--border)' }}>
            {product.preco_original && (
              <div style={{ color: 'var(--steel)', textDecoration: 'line-through', fontSize: '0.9rem' }}>
                De: R$ {product.preco_original}
              </div>
            )}
            <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-d)', color: 'var(--or1)', lineHeight: '1' }}>
              R$ {product.preco_venda}
            </div>
            <div style={{ color: 'var(--steel)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Em até 12x de R$ {(product.preco_venda / 12).toFixed(2).replace('.', ',')} sem juros no cartão
            </div>

            <button 
              onClick={() => addToCart(product)}
              className="btn-main" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem', padding: '1rem' }}
            >
              🛒 Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}