import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Bem-vindo ao Hotel</h1>
            <p>Explore nossos quartos e faça sua reserva agora mesmo!</p>
            <Link to="/rooms">Ver Quartos</Link>
        </div>
    );
};

export default Home;
