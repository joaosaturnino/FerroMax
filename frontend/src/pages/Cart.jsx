import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../hooks/CartContext';
import './Cart.css';

export default function Cart() {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + (Number(item.preco_venda) * item.quantidade), 0);

  return (
    <>
      <Header />
      <main className="section">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Seu Carrinho</h1>
        
        {cart.length === 0 ? (
          <p style={{ color: 'var(--steel)' }}>O carrinho está vazio.</p>
        ) : (
          <div className="cart-layout">
            <div className="cart-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img">{item.icone_imagem}</div>
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.nome}</div>
                    <div className="cart-item-qty">Quantidade: {item.quantidade}</div>
                  </div>
                  <div className="cart-item-price">
                    R$ {(item.preco_venda * item.quantidade).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2 style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>Resumo</h2>
              <div className="summary-row"><span>Subtotal</span><span>R$ {total.toFixed(2)}</span></div>
              <div className="summary-row"><span>Frete</span><span>Calculado no checkout</span></div>
              <div className="summary-total"><span>Total</span><span style={{ color: 'var(--or1)' }}>R$ {total.toFixed(2)}</span></div>
              <button className="btn-main" style={{ width: '100%', marginTop: '2rem' }}>Finalizar Compra</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}