import  { useState } from 'react';
import './DaftarBuku.css';

function DaftarBuku() {
  const [daftarBuku, setDaftarBuku] = useState([
    "Laskar Pelangi",
    "Bumi Manusia"
  ]);
  const [inputBuku, setInputBuku] = useState('');

  const handleTambahBuku = () => {
    if (!inputBuku.trim()) {
      alert("Nama buku tidak boleh kosong!");
      return;
    }
    setDaftarBuku([...daftarBuku, inputBuku]);
    setInputBuku('');
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleTambahBuku();
    }
  };

  return (
    <div className ="daftar-buku">
      <h2>Daftar Buku</h2>
      <div className ="input-buku">
        <input
          type="text"
          value={inputBuku}
          onChange={(e) => setInputBuku(e.target.value)}
          onKeyPress={handleInputKeyPress}
          placeholder="Masukkan nama buku"
        />
        <button onClick={handleTambahBuku}>
          Tambah
        </button>
      </div>

      <div className = "buku-tersimpan">
        <h3>Buku Tersimpan:</h3>
        {daftarBuku.length === 0 ? (
          <p>Belum ada buku dalam daftar.</p>
        ) : (
          <ul>
            {daftarBuku.map((buku, index) => (
              <li key={index}>
                {buku}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DaftarBuku;