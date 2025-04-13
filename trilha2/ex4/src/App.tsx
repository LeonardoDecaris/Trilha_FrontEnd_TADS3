import { useState, useEffect } from "react";
import './App.css';

type Tarefa = {
  id: number;
  descricao: string;
};

function ListaTarefas({ tarefasIniciais }: { tarefasIniciais: Tarefa[] }) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [visibilidade, setVisibilidade] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const inicialVisibilidade = tarefasIniciais.reduce((acc, tarefa) => {
      acc[tarefa.id] = true;
      return acc;
    }, {} as { [key: number]: boolean });
    setVisibilidade(inicialVisibilidade);
  }, [tarefasIniciais]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    const nova = {
      id: tarefas.length + 1,
      descricao: novaTarefa,
    };

    setTarefas([...tarefas, nova]);
    setVisibilidade((prev) => ({
      ...prev,
      [nova.id]: true,
    }));
    setNovaTarefa("");
  };

  const alternarVisibilidade = (id: number) => {
    setVisibilidade((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="tarefa-item">
            {visibilidade[tarefa.id] && (
              <span className="tarefa-detalhe">{tarefa.descricao}</span>
            )}
            <button
              onClick={() => alternarVisibilidade(tarefa.id)}
              className="button"
            >
              {visibilidade[tarefa.id] ? "Ocultar" : "Mostrar"}
            </button>
          </li>
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