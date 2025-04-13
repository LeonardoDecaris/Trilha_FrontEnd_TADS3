import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();
    return (
        <main className="home-container">
            <h1 className="home-title">Home</h1>
            <button onClick={() => navigate("/about")} className="home-button">About</button>
        </main>
    );
}

export default Home;