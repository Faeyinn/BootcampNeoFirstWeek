import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PerkenalanDiri from './PerkenalanDiri'
import Buah from './Buah'
import DaftarBuku from './DaftarBuku'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bootcamp First Week</h1><hr />

      <PerkenalanDiri nama = "Fajar" subdiv = "Web Programming" jurusan = "Teknik Komputer" /><hr />
      <Buah nama = "Apel" warna = "Merah" rasa = "Manis" /><hr />
      <DaftarBuku /><hr />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
