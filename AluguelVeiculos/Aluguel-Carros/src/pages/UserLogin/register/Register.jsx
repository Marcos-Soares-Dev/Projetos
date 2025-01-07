import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        if (password !== passwordConfirmation) {
            alert('As senhas não conferem');
            return;
        }

        const newUser = {
            name,
            email,
            password,
            carsRented: [],
        };

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
                setName('');
                setEmail('');
                setPassword('');
                setPasswordConfirmation('');
            } else {
                alert('Erro ao cadastrar usuário');
            }
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            alert('Erro ao cadastrar usuário');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>Cadastre-se</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="passwordConfirmation">Confirme a Senha:</label>
                        <input
                            type="password"
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Cadastrar</button>
                </form>
                <span>Já tem uma conta? <Link to="/login">Faça login</Link></span>
            </div>
        </div>
    );
}