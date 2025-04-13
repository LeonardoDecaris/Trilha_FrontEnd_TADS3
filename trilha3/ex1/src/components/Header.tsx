import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link className="link" to={'/inicio'}>Inicio</Link>
            <Link className="link" to={'/contato'}>Contato</Link>
            <Link className="link" to={'/sobre'} >Sobre</Link>

        </header>
    );
}

export default Header;