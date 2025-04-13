import { Link } from 'react-router-dom';
import './Rooms.css';

const Rooms = () => {
    const rooms = [
        { id: 1, name: 'Quarto Luxo' },
        { id: 2, name: 'Quarto Simples' },
        { id: 3, name: 'Suíte Master' }
    ];

    return (
        <div className="rooms-container">
            <h2>Quartos Disponíveis</h2>
            <ul className="rooms-list">
                {rooms.map(room => (
                    <li key={room.id}>
                        <Link to={`/rooms/${room.id}`}>
                            {room.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Rooms;
