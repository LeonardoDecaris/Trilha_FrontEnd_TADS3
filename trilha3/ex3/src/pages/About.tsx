import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
    const navigate = useNavigate();
    return (
        <main className="about-container">
            <h1 className="about-title">About</h1>
            <button  onClick={() => navigate("/home")}  className="about-button">Home</button>
        </main>
    );
}

export default About;