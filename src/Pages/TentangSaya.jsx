import React from 'react';
import MyPict from '../assets/MyPict.jpg'; // Pastikan path ini sesuai dengan struktur folder Anda

const TentangSaya = () => {
  return (
    <div className="page-content">
      <h1>Tentang Saya</h1>
      <img src={MyPict} alt="My Picture" className="my-picture" />
      <p>Halo, saya <b>Rahmat Fajar Saputra</b>. Saya seorang <b>Mahasiswa</b> dengan jurusan <b>Teknik Komputer</b> di <b>Universitas Andalas</b>. Saya suka <b>bermain game</b> dan <b>mendengar musik</b>.</p><br/>

      <h2>Biografi Singkat</h2>
      <p>Saya lahir di Bukittinggi, Sumatera Barat dan telah tinggal di Padang selama 2 tahun.</p>
      <p>Saya sedang menempuh pendidikan di Universitas Andalas dan sedang berjuang untuk mendapatkan gelar Sarjana Teknik.</p>
      <p>Saya telah berkuliah di Universitas selama 2 tahun dan memiliki pengalaman dalam pengembangan web dan <i>problem solving</i>.</p>
      <br/>

      <h2>Keahlian</h2>
      <ul>
        <li>Keahlian 1: Pengembangan Web</li>
        <li>Keahlian 2: <i>Problem Solving</i></li>
        <li>Keahlian 3: <i>Time Management</i></li>
      </ul>
      <br/>

      <h2>Informasi Tambahan</h2>
      <ul>
        <li>Hobi: Bermain Game dan Mendengar Musik</li>
        <li>Lokasi: Ambacang, Kec. Kuranji, Padang</li>
        <li>Pengalaman: Pengembangan web, Figma</li>
      </ul>
      <br/>
    </div>
  );
};

export default TentangSaya;
   