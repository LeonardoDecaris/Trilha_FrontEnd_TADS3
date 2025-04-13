import { useState } from "react";
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [erro, setErro] = useState('');
  const [usuario, setUsuario] = useState<{ name: string; email: string, username: string, phone: string } | null>(null);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const buscarUsuario = async () => {
    setErro('');

    if (!id) {
      setErro('Por favor, digite um ID.');
      return;
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

      if (!response.ok) {
        alert('Usuário não encontrado');
      }

      const data = await response.json();
      setUsuario({ name: data.name, email: data.email, username: data.username, phone: data.phone });
    } catch (error) {
      console.log(error);
      setErro('Usuário não encontrado.');
    }
  };

  const cadastrarUsuario = async () => {
    setMensagem('');

    if (!nome || !email) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: nome, email }),
      });

      if (response.ok) {
        const data = await response.json();
        setMensagem('Usuário cadastrado com sucesso!');
        console.log('Usuário cadastrado:', data);
        setNome('');
        setEmail('');
      } else {
        throw new Error('Erro ao cadastrar o usuário.');
      }
    } catch (error) {
      console.log(error);
      setMensagem('Erro ao cadastrar o usuário.');
    }
  };

  return (
    <main>
      <h1>Busque ou Cadastre um Usuário</h1>

      <section>
        <form onSubmit={(e) => { e.preventDefault(); buscarUsuario(); }}>
          <label htmlFor="id">Buscar código do usuário</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite o ID do usuário"
          />
          <button type="submit">Buscar</button>
        </form>
        {erro && <span className="mt-4 text-red-500">{erro}</span>}
      </section>

      <section>
        {usuario && (
          <div>
            <p><strong>Usuário:</strong> {usuario.username}</p>
            <p><strong>Nome:</strong> {usuario.name}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Telefone:</strong> {usuario.phone}</p>
          </div>
        )}
      </section>

      <section>
        <h2>Cadastrar Novo Usuário</h2>
        <form onSubmit={(e) => { e.preventDefault(); cadastrarUsuario(); }}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome do usuário"
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail do usuário"
          />

          <button type="submit">Cadastrar</button>
        </form>
        {mensagem && <span className={`mt-4 ${mensagem.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>{mensagem}</span>}
      </section>
    </main>
  );
}

export default App;