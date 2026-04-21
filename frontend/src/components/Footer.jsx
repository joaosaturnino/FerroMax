import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark2)', borderTop: '1px solid var(--border)', padding: '4rem 0 2rem' }}>
      <div className="footer-top" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--white)', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--or1)' }}>FERRO</span>MAX
          </div>
          <p style={{ color: 'var(--steel)' }}>A sua loja de ferramentas de confiança. Qualidade que não falha para profissionais e hobbistas.</p>
        </div>
        <div>
          <h3 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Links Úteis</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--steel)', lineHeight: '1.8' }}>
            <li><a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre Nós</a></li>
            <li><a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Política de Devolução</a></li>
            <li><a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Garantia</a></li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Contacto</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--steel)', lineHeight: '1.8' }}>
            <li>📍 Tupã — SP</li>
            <li>📞 (14) 3496-0000</li>
            <li>✉️ contacto@ferromax.com.br</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', color: 'var(--steel)', marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
        <p>© 2026 FerroMax Ferramentas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}