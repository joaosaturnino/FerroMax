import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Header />
      <main className="login-page section">
        <div className="login-box">
          <div className="login-header">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔧</div>
            <h1>Acesso Restrito</h1>
            <p>Área de autenticação FerroMax</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>E-mail Corporativo</label>
              <input 
                type="email" 
                className="form-input" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="nome@ferromax.com.br" 
              />
            </div>
            <div className="form-group">
              <label>PASSWORD: •••••</label>
              <input 
                type="password" 
                className="form-input" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Insira a sua senha" 
              />
            </div>
            <button type="submit" className="btn-main" style={{ width: '100%', marginTop: '1rem' }}>
              Autenticar
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}