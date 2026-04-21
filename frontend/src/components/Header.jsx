import React from 'react';

export default function Header() {
  return (
    <>
      {/* ANNOUNCE */}
      <div className="announce">
        <div className="announce-track">
          <div className="announce-item">🚚 Frete grátis acima de R$299</div>
          <div className="announce-dot"></div>
          <div className="announce-item">⚡ Parcele em até 12x sem juros</div>
          <div className="announce-dot"></div>
          <div className="announce-item">🔒 Pagamento 100% seguro</div>
          <div className="announce-dot"></div>
          <div className="announce-item">🏆 12 anos de experiência</div>
          <div className="announce-dot"></div>
          <div className="announce-item">📦 Embalagem reforçada garantida</div>
        </div>
      </div>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-left">
          <a href="/">📍 Tupã — SP</a>
          <div className="topbar-sep"></div>
          <a href="/">Rastrear pedido</a>
          <div className="topbar-sep"></div>
          <a href="/">Central de ajuda</a>
        </div>
        <div className="topbar-right">
          <a href="/">Seja um revendedor</a>
          <div className="topbar-sep"></div>
          <a href="/">Minha conta</a>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <div className="logo-icon">🔧</div>
            <div>
              <div className="logo-name">FERRO<em>MAX</em></div>
              <span className="logo-sub">Ferramentas</span>
            </div>
          </div>
          
          <div className="search-wrap">
            <span className="search-ico">🔍</span>
            <input type="text" placeholder="Buscar ferramentas, marcas, categorias..." />
            <button className="search-btn">Buscar</button>
          </div>
          
          <div className="nav-actions">
            <button className="nav-icon-btn">❤️ Lista</button>
            <button className="nav-icon-btn">👤 Entrar</button>
            <button className="cart-btn">
              🛒 Carrinho <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </header>

      {/* CATEGORY NAV */}
      <nav className="catnav">
        <div className="catnav-inner">
          <a className="catnav-item active" href="/"><span className="ico">📋</span> Todas as Categorias</a>
          <a className="catnav-item" href="/"><span className="ico">🔋</span> Elétricas</a>
          <a className="catnav-item" href="/"><span className="ico">🪛</span> Manuais</a>
          <a className="catnav-item" href="/"><span className="ico">🧰</span> Kits</a>
          <a className="catnav-item" href="/"><span className="ico">🛡️</span> EPIs</a>
          <a className="catnav-item" href="/"><span className="ico">📏</span> Medição</a>
          <a className="catnav-item" href="/"><span className="ico">🪚</span> Serras</a>
          <a className="catnav-item" href="/"><span className="ico">💡</span> Iluminação</a>
          <a className="catnav-item" href="/"><span className="ico">🪣</span> Pintura</a>
          <a className="catnav-item" href="/"><span className="ico">🔥</span> Ofertas do dia</a>
        </div>
      </nav>
    </>
  );
}