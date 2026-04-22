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

  const handleAdd = () => {
    addToCart(product);
    alert(`${product.nome} adicionado ao carrinho!`);
  };

  return (
    <>
      <Header />
      <main className="section details-page">
        <div className="details-image-box">
          <span className="floating-icon">{product.icone_imagem}</span>
        </div>
        <div className="details-info">
          <span className="details-ref">Código: #00{product.id}</span>
          <h1 className="details-title">{product.nome}</h1>
          <div className="rating-row">★★★★★ <span>(4.9/5)</span></div>
          <p className="details-desc">{product.descricao}</p>
          
          <div className="details-buy-box">
            <span className="price-tag">R$ {product.preco_venda}</span>
            <p className="details-installments">ou 12x de R$ {(product.preco_venda / 12).toFixed(2)}</p>
            <button onClick={handleAdd} className="btn-main full-width">
              🛒 Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}