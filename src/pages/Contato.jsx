import { useState } from "react";
import { Header } from "../components/Header";

import styles from "../styles/pages/contato.module.css";

import lacreDoBemImg from "../assets/LacreDoBem.png";
import aneisSolidariosImg from "../assets/aneisSolidarios.png";
import formularioImg from "../assets/Contato.png";

export function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleInputValueNome(event) {
    setNome(event.target.value);
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value);
  }

  function handleInputValueEndereco(event) {
    setEndereco(event.target.value);
  }

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value);
  }

  function handleCreateMessage(event) {
    event.preventDefault();
    console.log(nome, email, endereco, mensagem);

    setNome("");
    setEmail("");
    setEndereco("");
    setMensagem("");
  }

  return (
    <>
      <Header title="Contatos:" />
      <div className={styles.cardContato}>
        <h1 className={styles.cardContato}>
          Conheça mais sobre as empresas/associações exemplos, bem como onde
          doar:{" "}
        </h1>
      </div>

      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <a
            href="https://www.lacredobem.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={lacreDoBemImg}
              alt="Imagem do slogan da página lacre do bem"
            />
          </a>
          <h2 className={styles.cardTitle}>
            (31) 99608.8314 / (31) 98793.1813
          </h2>
          <p className={styles.cardText}>Lacre do Bem</p>
        </div>

        <div className={styles.cardContainer}>
          <a
            href="https://www.aneissolidarios.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={aneisSolidariosImg}
              alt="Imagem do slogan da página lacre do bem"
            />
          </a>
          <h2 className={styles.cardTitle}> (14) 3401.2425 </h2>
          <p className={styles.cardText}>Anéis Solidários</p>
        </div>
      </div>

      <div className={styles.cardContato}>
        <h3 className={styles.cardContato}>
          Junte os lacres das latinhas e entregue-os nos postos de arrecadação
          conforme endereços disponibilizados nas empresas citadas como exemplo
          acima e/ou seja um ponto de coleta. Cadastre-se abaixo:
        </h3>
      </div>

      <div className={styles.sobreFormulario}>
        <img
          className={styles.sobreFormularioImagem}
          src={formularioImg}
          alt="Imagem do ToDo"
        />
      </div>

      <div>
        <form className={styles.form} onSubmit={handleCreateMessage}>
          <input
            className={styles.formInput}
            placeholder="● Digite seu Nome:"
            onChange={handleInputValueNome}
            value={nome}
          />
          <input
            className={styles.formInput}
            placeholder="● Digite seu E-mail:"
            onChange={handleInputValueEmail}
            value={email}
          />
          <input
            className={styles.formInput}
            placeholder="●Digite seu Endereço:"
            onChange={handleInputValueEndereco}
            value={endereco}
          />
          <textarea
            className={styles.formTextArea}
            placeholder="● Mensagem: Caso entenda necessário."
            onChange={handleInputValueMensagem}
            value={mensagem}
          />
          <button type="submit" className={styles.formButton}>
            Cadastre-se
          </button>
        </form>
        <a className="link-topo" href="#">
          &#9650;
        </a>
      </div>
    </>
  );
}
