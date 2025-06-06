import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beranda from './Pages/Beranda';
import DetailArtikel from './Pages/DetailArtikel';
import TentangSaya from './Pages/TentangSaya';
import Kontak from './Pages/Kontak';
import NotFound from './Pages/NotFound';
import Navigasi from './Components/Navigasi';
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
