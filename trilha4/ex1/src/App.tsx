import { useState } from "react";
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [erro, setErro] = useState('');
  const [usuario, setUsuario] = useState<{ name: string; email: string, username: string, phone: string } | null>(null);

  const buscarUsuario = async () => {
    setErro('');

    if (!id) {
      setErro('Por favor, digite um ID.');
      return;
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

      if (!response.ok) {
        alert('Usuário nao encontrado');
      }

      const data = await response.json();
      setUsuario({ name: data.name, email: data.email, username: data.username, phone: data.phone });
    } catch (error) {
      console.log(error);
      setErro('Usuário não encontrado.');
    }
  };

  return (
    <main>
      <h1>Busque um Usuário</h1>
      <section>
        <form onSubmit={(e) => { e.preventDefault(); buscarUsuario() }}>
          <label htmlFor="id">Buscar codigo do usuario</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite o ID do usuário"
          />

          <button type="submit">
            Buscar
          </button>
        </form>
        {erro && <span className="mt-4 text-red-500">{erro}</span>}
      </section>
      <section>
        {usuario && (
          <div>
            <p><strong>Usuario:</strong> {usuario.username}</p>
            <p><strong>Nome:</strong> {usuario.name}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Teçefone:</strong> {usuario.phone}</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;