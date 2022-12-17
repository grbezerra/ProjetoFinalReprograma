import { Link } from "react-router-dom";

import styles from '../styles/components/menu.module.css'

export function Menu() {
  return (
    <ul className={styles.menuContainer}>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/">𓆩 Home 𓆪</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/sobre">𓆩 Sobre 𓆪</Link>
      </li>      
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/doacoes">𓆩 Como ajudar 𓆪</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="contato">𓆩 Contato 𓆪</Link>
      </li>
    </ul>
  );
}
