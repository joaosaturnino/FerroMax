import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rota dinâmica para exibir os detalhes do produto */}
        <Route path="/produto/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;