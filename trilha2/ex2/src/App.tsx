import { useState } from "react";
import './App.css';

function Saudacao({ nomeInicial }: { nomeInicial: string }) {
  const [nome, setNome] = useState(nomeInicial);

  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite um novo nome"
        className="input"
      />
    </div>
  );
}

function App() {
  return (
    <main>
      <h1>Bem Vindo!</h1>
      <Saudacao nomeInicial="Visitante" />
    </main>
  );
}

export default App;