import { useParams, useNavigate } from 'react-router-dom';
import './RoomDetails.css';

const RoomDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleBooking = () => {
        navigate('/booking-success');
    };

    return (
        <div className="room-details">
            <h2>Detalhes do Quarto #{id}</h2>
            <p>Aqui estão os detalhes do quarto selecionado.</p>
            <button onClick={handleBooking}>Reservar Quarto</button>
        </div>
    );
};

export default RoomDetails;
