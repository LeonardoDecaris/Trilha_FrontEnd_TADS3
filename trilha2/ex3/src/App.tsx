import { useState } from "react";
import './App.css';

type Tarefa = {
  id: number;
  descricao: string;
};


function ListaTarefas({ tarefasIniciais }: { tarefasIniciais: Tarefa[] }) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    const nova = {
      id: tarefas.length + 1,
      descricao: novaTarefa,
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.descricao}</li>
        ))}
      </ul>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
        className="input"
      />
      <button onClick={adicionarTarefa} className="button">
        Adicionar Tarefa
      </button>
    </div>
  );
}

function App() {
  const tarefasIniciais = [
    { id: 1, descricao: "Trilhas da Claudia" },
  ];

  return (
    <main>
      <h1>Bem Vindo!</h1>
      <ListaTarefas tarefasIniciais={tarefasIniciais} />
    </main>
  );
}

export default App;