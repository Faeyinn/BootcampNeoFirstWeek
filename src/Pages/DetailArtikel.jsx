import React from 'react';
import { useParams } from 'react-router-dom';

const DetailArtikel = () => {
const { idArtikel } = useParams();
const content = `Ini adalah konten untuk artikel dengan ID ${idArtikel}`;

  return (
    <div className="page-content">
      <h1>Detail Artikel {idArtikel}</h1>
      <p>{content}</p>
    </div>
  );
};

export default DetailArtikel;