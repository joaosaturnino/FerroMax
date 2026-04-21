import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../hooks/CartContext';
import './ProductDetails.css'; // Importação do CSS novo

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <div className="section">A carregar...</div>;

  return (
    <>
      <Header />
      <main className="section details-page">
        <div className="details-image-box">
          {product.icone_imagem}
        </div>
        <div className="details-info">
          <span className="details-ref">REF: {product.id}</span>
          <h1 className="details-title">{product.nome}</h1>
          <p className="details-desc">{product.descricao}</p>
          
          <div className="details-buy-box">
            <div className="details-price">R$ {product.preco_venda}</div>
            <div className="details-installments">
              Em até 12x de R$ {(product.preco_venda / 12).toFixed(2).replace('.', ',')}
            </div>
            <button onClick={() => addToCart(product)} className="btn-main" style={{ width: '100%', marginTop: '1.5rem' }}>
              🛒 Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}