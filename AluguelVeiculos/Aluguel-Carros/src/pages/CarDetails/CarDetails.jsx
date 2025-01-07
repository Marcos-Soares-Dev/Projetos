import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ButtonPrimary from '../../components/buttonPrimary/ButtonPrimary';
import styles from './CarDetails.module.css';

export default function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    

    useEffect(() => {
        fetch(`http://localhost:3000/cars/${id}`)
            .then(response => response.json())
            .then(data => setCar(data))
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, [id]);

    if (!car) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={styles.carDetails}>
            <img src={car.image} alt={car.name} className={styles.carImage} />
            <h2>{car.name}</h2>
            <p>Preço: R$ {car.price}/dia</p>
            <ButtonPrimary>Alugar</ButtonPrimary>
            <Link to={"/"}> <button className={styles.button}>Voltar</button> </Link>
            
        </div>
    );
}