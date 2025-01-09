import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { useState } from 'react';

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/users');
            if (!response.ok) {
                throw new Error('Erro ao buscar usuários');
            }
            const users = await response.json();

            const user = users.find(user => user.name === name && user.password === password);

            if (user) {
                
                sessionStorage.setItem('loggedInUser', JSON.stringify(user));
                alert(`Bem vindo, ${user.name}!`);
                navigate('/');
                window.location.reload(); 
            } else {
                
                setError('Usuário ou senha inválidos');
            }
        } catch (error) {
            setError('Erro ao conectar com o servidor');
            console.error('Erro:', error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(ev) => setName(ev.target.value)} required />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(ev) => setPassword(ev.target.value)} required />
                    </div>
                    <button type="submit" className={styles.submitButton}>Login</button>
                    {error && <p className={styles.error}>{error}</p>}
                    <div>
                        <span>Ou <Link to="/login/register">Cadastre-se</Link> </span>
                    </div>
                </form>
            </div>
        </div>
    );
}