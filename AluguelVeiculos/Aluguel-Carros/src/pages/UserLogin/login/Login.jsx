import { Link } from 'react-router-dom';
import styles from './Login.module.css';


export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>Login</h2>
                <form>
                    <div className={styles.formField}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className={styles.submitButton}>Login</button>
                    <div>
                        <span>Ou <Link to="/login/register">Cadastre-se</Link> </span>
                    </div>
                </form>
            </div>
        </div>
    );
}