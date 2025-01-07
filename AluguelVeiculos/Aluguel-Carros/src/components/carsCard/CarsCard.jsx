import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../buttonPrimary/ButtonPrimary';
import styles from './CarsCard.module.css';

export default function CarsCard({ car }) {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/cars/${car.id}`);
    };

    const handleRentClick = () => {
        navigate(`/cars/${car.id}`);
    };

    return (
        <div className={styles.carCard}>
            <img src={car.image} alt={car.name} className={styles.carImage} />
            <h3>{car.name}</h3>
            <p>R$ {car.price}/dia</p>
            <ButtonPrimary onClick={handleDetailsClick}>Ver Detalhes</ButtonPrimary>
            <ButtonPrimary onClick={handleRentClick}>Alugar</ButtonPrimary>
        </div>
    );
}

CarsCard.propTypes = {
    car: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};