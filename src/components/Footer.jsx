import styles from "../styles/components/footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>
        {" "}
        🦋 Desenvolvido por Gabriela R. Bezerra 🦋
      </p>

      <div className={styles.endereco}>
        <a
          href="https://github.com/grbezerra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.icon}
            src="https://cdn-icons-png.flaticon.com/128/4926/4926624.png"
            alt="Icon GitHub"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/gabriela-bezerra-63647a240/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.icon}
            src="https://cdn-icons-png.flaticon.com/128/254/254394.png"
            alt="Icon Linkedin"
          />
        </a>
      </div>
    </footer>
  );
}
