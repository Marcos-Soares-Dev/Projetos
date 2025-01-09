import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ButtonPrimary from '../../components/buttonPrimary/ButtonPrimary';
import styles from './CarDetails.module.css';

export default function CarDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/cars/${id}`)
            .then(response => response.json())
            .then(data => setCar(data))
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, [id]);

    const handleRentCar = async () => {
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
        if (!loggedInUser) {
            setError('Você precisa estar logado para alugar um carro.');
            return;
        }

        try {
            
            const updatedCar = { ...car, rented: true };
            await fetch(`http://localhost:3000/cars/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCar),
            });

            
            const updatedUser = { ...loggedInUser, carsRented: [...loggedInUser.carsRented, car.id] };
            await fetch(`http://localhost:3000/users/${loggedInUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });

            sessionStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
            navigate('/');
        } catch (error) {
            console.error('Erro ao alugar o carro:', error);
            setError('Erro ao alugar o carro. Tente novamente mais tarde.');
        }
    };

    if (!car) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={styles.carDetails}>
            <img src={car.image} alt={car.name} className={styles.carImage} />
            <h2>{car.name}</h2>
            <p>Preço: R$ {car.price}/dia</p>
            <ButtonPrimary onClick={handleRentCar}>Alugar</ButtonPrimary>
            <Link to={"/"}> <button className={styles.button}>Voltar</button> </Link>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
}