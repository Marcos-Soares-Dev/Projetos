import { Link, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";

export default function RootLayout() {
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
          <Link to="/login">
            <button>Login/Cadastro</button>
          </Link>
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