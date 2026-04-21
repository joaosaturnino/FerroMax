import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../hooks/CartContext';

export default function Cart() {
  const { cart } = useCart();

  // Calcula o valor total do carrinho
  const total = cart.reduce((acc, item) => acc + (Number(item.preco_venda) * item.quantidade), 0);

  return (
    <>
      <Header />
      
      <main className="section section-border" style={{ minHeight: '60vh' }}>
        <h1 style={{ fontFamily: 'var(--font-d)', fontSize: '2.5rem', marginBottom: '2rem' }}>Seu Carrinho</h1>

        {cart.length === 0 ? (
          <p style={{ color: 'var(--steel)' }}>Seu carrinho está vazio. Volte para a loja para adicionar produtos.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            
            {/* Lista de Itens */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--dark3)', padding: '1rem', borderRadius: 'var(--r8)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '3rem', width: '80px', textAlign: 'center', background: 'var(--dark4)', borderRadius: 'var(--r4)' }}>
                    {item.icone_imagem}
                  </div>
                  <div style={{ flex: '1' }}>
                    <div style={{ fontWeight: '600', color: 'var(--white)' }}>{item.nome}</div>
                    <div style={{ color: 'var(--steel)', fontSize: '0.85rem' }}>Qtd: {item.quantidade}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: '1.5rem', color: 'var(--or1)' }}>
                    R$ {(item.preco_venda * item.quantidade).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Resumo do Pedido */}
            <div style={{ background: 'var(--dark3)', padding: '2rem', borderRadius: 'var(--r12)', border: '1px solid var(--border)', height: 'fit-content' }}>
              <h2 style={{ fontFamily: 'var(--font-s)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Resumo</h2>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--steel)' }}>
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'var(--steel)' }}>
                <span>Frete</span>
                <span>Calculado na próxima etapa</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '1rem', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                <span>Total</span>
                <span style={{ color: 'var(--or1)' }}>R$ {total.toFixed(2)}</span>
              </div>

              <button className="btn-main" style={{ width: '100%', justifyContent: 'center' }}>
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}