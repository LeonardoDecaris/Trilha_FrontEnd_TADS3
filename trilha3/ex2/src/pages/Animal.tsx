// src/pages/Animal.tsx
import { useNavigate, useParams } from "react-router-dom";
import './Animal.css';

const Animal = () => {
    const { name } = useParams<{ name: string }>();
    const navigate = useNavigate();

    return (
        <main className="animal-container">
            <div className="animal-card">
                <h1>Animal</h1>
                <p>O nome do animal é: <strong>{name}</strong></p>

                <div className="button-container">
                    <button className="home-button" onClick={() => navigate('/')}>
                        Home
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Animal;
