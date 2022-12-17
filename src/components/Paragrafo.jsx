import styles from '../styles/pages/sobre.module.css';

export function Paragrafo(props) {
  return (
    <div>
      <p className={styles.bioText}>{props.title}</p>
    </div>
  );
}