import React from 'react';
import { Link } from 'react-router-dom';

const Navigasi = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/tentang-saya">Tentang Saya</Link></li>
        <li><Link to="/kontak">Kontak</Link></li>
      </ul>
    </nav>
  );
};

export default Navigasi;