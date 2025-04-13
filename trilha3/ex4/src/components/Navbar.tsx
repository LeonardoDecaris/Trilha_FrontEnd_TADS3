import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {


    return (
        <header>

            <Link to="/"  >Home</Link>
            <Link to="/rooms" >Quartos</Link>

        </header >
    )
};

export default Navbar;
