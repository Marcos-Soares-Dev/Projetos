import { Link, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";
import { useEffect, useState } from "react";

export default function RootLayout() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const user = sessionStorage.getItem('loggedInUser');
        if (user) {
            setLoggedInUser(JSON.parse(user));
        }
    }, []);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logoBrand}>
                    <Link to="/">Localiza</Link>
                </div>

                <div className={styles.searchBar}>
                    <input type="text" placeholder="Procure seu veiculo pelo modelo" />
                    <button>Buscar</button>
                </div>

                <nav>
                    <Link to="/">Início</Link>
                    {loggedInUser ? (
                        <Link to="/userInfo">
                            <span>Bem-vindo, {loggedInUser.name}</span>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <button>Login/Cadastro</button>
                        </Link>
                    )}
                </nav>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                <p>Localiza</p>
                <p>Aluguel de carros</p>
                <p>Endereço: Rua dos Bobos, nº 0</p>
                <p>Telefone: (00) 0000-0000</p>
            </footer>
        </>
    );
}