import React from 'react';
import { Link } from 'react-router-dom';

const Beranda = () => {
const articles = [
  { id: 1, title: 'Artikel 1' },
  { id: 2, title: 'Artikel 2' },
  { id: 3, title: 'Artikel 3' },
];

  return (
    <div className="page-content">
      <h1>Beranda</h1>
      <ul className="article-list">
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/artikel/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Beranda;