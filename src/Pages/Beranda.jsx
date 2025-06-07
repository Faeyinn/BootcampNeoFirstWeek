import React from 'react';
import { Link } from 'react-router-dom';

const Beranda = () => {
  const articles = [
    { id: 1, title: 'Pengertian dan Cara Kerja ReactJS', desc: 'ReactJS adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna.' },
    { id: 2, title: 'Belajar ReactJS dengan Mudah', desc: 'Belajar ReactJS bisa dimulai dengan memahami konsep dasar seperti komponen, props, dan state.' },
    { id: 3, title: 'Belajar Router dengan ReactJS', desc: 'React Router adalah pustaka yang memungkinkan navigasi antar komponen dalam aplikasi React.' },
    { id: 4, title: 'Menggunakan Hooks di ReactJS', desc: 'Hooks adalah fitur baru di React yang memungkinkan penggunaan state dan efek samping dalam komponen fungsional.' },
  ];

  return (
    <div className="page-content">
      <h1>Blog Pribadi Sederhana</h1>
      <ul className="article-list">
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/artikel/${article.id}`}>{article.title}<br/>
            <p className='desc'>{article.desc}</p></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Beranda;