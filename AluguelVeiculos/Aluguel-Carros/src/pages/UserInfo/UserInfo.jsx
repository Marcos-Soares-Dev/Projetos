import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../../components/buttonPrimary/ButtonPrimary';
import styles from './UserInfo.module.css';

export default function UserInfo() {
    const [user, setUser] = useState(null);
    const [cars, setCars] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
        if (!loggedInUser) {
            navigate('/login');
            return;
        }
        setUser(loggedInUser);

        fetch('http://localhost:3000/cars')
            .then(response => response.json())
            .then(data => {
                const rentedCars = data.filter(car => loggedInUser.carsRented.includes(car.id));
                setCars(rentedCars);
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, [navigate]);

    const handleReturnCar = async (carId) => {
        try {
            
            const updatedCar = { ...cars.find(car => car.id === carId), rented: false };
            await fetch(`http://localhost:3000/cars/${carId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCar),
            });

            // Atualizar o usuário para remover o carro devolvido
            const updatedUser = { ...user, carsRented: user.carsRented.filter(id => id !== carId) };
            await fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });

            sessionStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
            setUser(updatedUser);
            setCars(cars.filter(car => car.id !== carId));
        } catch (error) {
            console.error('Erro ao devolver o carro:', error);
            setError('Erro ao devolver o carro. Tente novamente mais tarde.');
        }
    };

    if (!user) {
        return <p>Carregando...</p>;
    }

    return (
        <div className={styles.userInfo}>
            <h2>Informações do Usuário</h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <h3>Carros Alugados</h3>
            {cars.length > 0 ? (
                <ul>
                    {cars.map(car => (
                        <li key={car.id}>
                            <img src={car.image} alt={car.name} className={styles.carImage} />
                            <p>{car.name}</p>
                            <p>Preço: R$ {car.price}/dia</p>
                            <ButtonPrimary onClick={() => handleReturnCar(car.id)}>Devolver</ButtonPrimary>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Você não tem carros alugados no momento.</p>
            )}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
}