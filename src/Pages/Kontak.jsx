import React from 'react';
import MyPict from '../assets/MyPict.jpg';

const Kontak = () => {
  return (
    <div className="page-content">
      <h1>Kontak</h1>
    <img src={MyPict} alt="My Picture" className="my-picture" />
      <div className='kontak-info'>
        <p>Nama: Rahmat Fajar Saputra
        <br/>Email: fajar.saputra2907@gmail.com
        <br/>Telepon: 0895-6000-77007
        <br/>Alamat: Pasar Ambacang, Kec. Kuranji, Padang, Sumatera Barat, Indonesia</p>

        <p>Social Media:
        <ul>
          <li><a href="https://www.x.com/givibes" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/jaaeyia" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.tiktok.com/scaraavie" target="_blank" rel="noopener noreferrer">TikTok</a></li>
        </ul></p>
      </div>
    </div>
  );
};

export default Kontak;
