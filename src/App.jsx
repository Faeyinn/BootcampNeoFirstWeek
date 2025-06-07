import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import DetailArtikel from './pages/DetailArtikel';
import TentangSaya from './pages/TentangSaya';
import Kontak from './pages/Kontak';
import NotFound from './pages/NotFound';
import Navigasi from './components/Navigasi';
import './App.css';

const App = () => {
  return (
    <div>
      <Navigasi />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/artikel/:idArtikel" element={<DetailArtikel />} />
        <Route path="/tentang-saya" element={<TentangSaya />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
