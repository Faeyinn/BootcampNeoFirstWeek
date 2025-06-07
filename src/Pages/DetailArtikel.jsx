import React from 'react';
import { useParams } from 'react-router-dom';

const articles = [
  { id: 1, title: 'Pengertian dan Cara Kerja ReactJS', desc: 'ReactJS adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna.' },
  { id: 2, title: 'Belajar ReactJS dengan Mudah', desc: 'Belajar ReactJS bisa dimulai dengan memahami konsep dasar seperti komponen, props, dan state.' },
  { id: 3, title: 'Belajar Router dengan ReactJS', desc: 'React Router adalah pustaka yang memungkinkan navigasi antar komponen dalam aplikasi React.' },
  { id: 4, title: 'Menggunakan Hooks di ReactJS', desc: 'Hooks adalah fitur baru di React yang memungkinkan penggunaan state dan efek samping dalam komponen fungsional.' },
];

const DetailArtikel = () => {
  const { idArtikel } = useParams();
  const artikel = articles.find(article => article.id === parseInt(idArtikel));
  if (!artikel) {
    return <div className="page-content">Artikel tidak ditemukan.</div>;
  }

  return (
    <div className="page-content">
      <h1>{artikel.title}</h1>
      <p>{artikel.desc}</p>
    </div>
  );
};

export default DetailArtikel;