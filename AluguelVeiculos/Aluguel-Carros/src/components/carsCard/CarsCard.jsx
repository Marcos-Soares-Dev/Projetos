import PropTypes from 'prop-types';
import ButtonPrimary from '../buttonPrimary/buttonPrimary';
import styles from './CarsCard.module.css';

export default function CarsCard({ car }) {
    return (
        <div className={styles.carCard}>
            <img src={car.image} alt={car.name} className={styles.carImage} />
            <h3>{car.name}</h3>
            <p>R$ {car.price}/dia</p>
            <ButtonPrimary>Ver Detalhes</ButtonPrimary>
            <ButtonPrimary>Alugar</ButtonPrimary>
        </div>
    );
}

CarsCard.propTypes = {
    car: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};