import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Tentando logar com:", email, password);
    // Aqui entrará a integração com o back-end (ex: api.post('/login'))
  };

  return (
    <>
      <Header />
      
      <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ background: 'var(--dark3)', padding: '3rem', borderRadius: 'var(--r12)', border: '1px solid var(--border)', width: '100%', maxWidth: '400px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔧</div>
            <h1 style={{ fontFamily: 'var(--font-d)', fontSize: '2rem', letterSpacing: '.05em' }}>Acesso ao Sistema</h1>
            <p style={{ color: 'var(--steel)', fontSize: '0.85rem' }}>Entre com suas credenciais FerroMax</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-s)', fontWeight: '700', fontSize: '0.8rem', color: 'var(--steel2)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                E-mail
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--dark4)', border: '1px solid var(--border2)', borderRadius: 'var(--r8)', color: 'var(--white)', outline: 'none' }}
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'var(--font-s)', fontWeight: '700', fontSize: '0.8rem', color: 'var(--steel2)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                PASSWORD: •••••
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--dark4)', border: '1px solid var(--border2)', borderRadius: 'var(--r8)', color: 'var(--white)', outline: 'none' }}
                placeholder="Insira sua senha"
              />
            </div>

            <button type="submit" className="btn-main" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
              Entrar
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--steel)' }}>
            <a href="/" style={{ color: 'var(--or1)', textDecoration: 'none' }}>Esqueci minha senha</a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}