import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="prod-card" style={{ background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Link to={`/produto/${product.id}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
        <div className="prod-img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '4rem', minHeight: '200px', background: 'var(--dark4)', position: 'relative' }}>
          {product.icon}
          <div className="prod-badges" style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '5px' }}>
            {product.badges?.map((badge, idx) => (
              <span key={idx} className={`badge ${badge.type}`} style={{ background: badge.text === 'Oferta' ? 'var(--or1)' : 'var(--white)', color: badge.text === 'Oferta' ? 'var(--white)' : 'var(--dark)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                {badge.text}
              </span>
            ))}
          </div>
        </div>
        <div className="prod-body" style={{ padding: '1.5rem' }}>
          <div className="prod-brand" style={{ color: 'var(--steel)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.brand}</div>
          <div className="prod-name" style={{ color: 'var(--white)', fontWeight: '600', margin: '0.5rem 0', lineHeight: '1.4' }}>{product.name}</div>
          <div className="prod-stars" style={{ marginBottom: '1rem' }}>
            <span className="stars" style={{ color: 'var(--or1)' }}>{product.rating}</span>
            <span className="reviews" style={{ color: 'var(--steel)', fontSize: '0.8rem', marginLeft: '4px' }}>({product.reviews})</span>
          </div>
          <div className="prod-price-row">
            {product.oldPrice && <span className="prod-old" style={{ textDecoration: 'line-through', color: 'var(--steel)', marginRight: '8px' }}>R$ {product.oldPrice}</span>}
            <span className="prod-price" style={{ color: 'var(--white)', fontWeight: 'bold', fontSize: '1.5rem' }}>R$ {product.price}</span>
          </div>
          <div className="prod-installment" style={{ color: 'var(--steel)', fontSize: '0.85rem', marginTop: '0.2rem' }}>{product.installments}</div>
        </div>
      </Link>
      <div className="prod-footer" style={{ padding: '1rem', borderTop: '1px solid var(--border)' }}>
        <button 
          onClick={(e) => { e.preventDefault(); addToCart(product); }} 
          className="add-cart" 
          style={{ width: '100%', padding: '0.8rem', background: 'var(--or1)', color: 'var(--white)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', transition: 'background 0.3s' }}
        >
          + Carrinho
        </button>
      </div>
    </div>
  );
}