// src/pages/Home.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    const [animalName, setAnimalName] = useState("");
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (animalName.trim()) {
            navigate(`/animal/${animalName}`);
        } else {
            alert("Insira o nome de um animal.");
        }
    };

    return (
        <main className="home-container">
            <div className="home-card">
                <h1>Bem-vindo!</h1>
                <p>Digite o nome de um animal para ver os detalhes:</p>
                <input
                    type="text"
                    className="animal-input"
                    placeholder="Nome do animaal"
                    value={animalName}
                    onChange={(e) => setAnimalName(e.target.value)}
                />
                <button className="submit-button" onClick={handleNavigate}>
                    Ver Animal
                </button>
            </div>
        </main>
    );
};

export default Home;
