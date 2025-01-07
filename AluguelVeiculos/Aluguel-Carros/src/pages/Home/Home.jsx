import { useEffect, useState } from 'react';
import CarsCard from '../../components/carsCard/CarsCard';
import styles from './Home.module.css';

export default function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/cars')
            .then(response => response.json())
            .then(data => {
                // Filtrar carros que não estão alugados
                const availableCars = data.filter(car => !car.rented);
                setCars(availableCars);
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    return (
        <div className={styles.homeContainer}>
            <div className={styles.catalog}>
                {cars.map(car => (
                    <CarsCard key={car.id} car={car} />
                ))}
            </div>

            <div className={styles.filters}>
                <h2>Filtros</h2>
                <button className={styles.filterButton}>Mais Baratos</button>
                <button className={styles.filterButton}>Mais Novos</button>
                {/* Adicione mais filtros conforme necessário */}
            </div>
        </div>
    );
}