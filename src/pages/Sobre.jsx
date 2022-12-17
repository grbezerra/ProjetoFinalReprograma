import { Header } from "../components/Header";
import sobreImg from "../assets/ReciclagemRosa.png";
import pessoasImg from "../assets/Pessoas.png";
import reciclagemImg from "../assets/ComoFunciona.png";

import styles from "../styles/pages/sobre.module.css";
import { Paragrafo } from "../components/Paragrafo";

export function Sobre() {
  return (
    <>
      <Header title="Sobre a reciclagem dos lacres:" />
      <div className={styles.sobreContainer}>
        <img className={styles.sobreImagemRecliclagem} src={sobreImg} />
      </div>

      <div className={styles.sobreContainer}>
        <div className={styles.sobreContainer}>
          <h2 className={styles.bioTitle}>
            Você com certeza conhece ou já viu alguém guardando os lacres de
            latinhas e geralmente se questiona, por qual motivo e para que?
          </h2>

          <Paragrafo
            title="Os lacres de latinhas por serem feitos de alumínio como a própria
            lata, são vendidos para a reciclagem. Os lacres passam pelo mesmo
            processo de reciclagem de todo metal para a fabricação do novo
            alumínio. Pela possibilidade de reciclagem existem instituições que
            recebem grandes quantidades de lacre de latinha de alumínio para
            trocá-los por cadeiras de rodas, que são doadas às pessoas que não
            têm condições financeiras de comprá-las. Então, juntando a latinha
            vazia ou o lacre você auxiliará na doação de cadeias de rodas para
            pessoas com deficiência física ou entidades filantrópicas."
          />
        </div>
      </div>

      <div className={styles.sobreContainer}>
        <img className={styles.sobreImagemPessoas} src={pessoasImg} />
      </div>

      <div className={styles.sobreContainer}>
        <h2 className={styles.bioTitle}>Evitando competições:</h2>
        <Paragrafo
          title="Apesar do lacre da latinha de alumínio ser menos valioso do que a lata
          em si, algumas organizações que recebem esses itens preferem fazê-lo
          para não competir com os catadores de latinha – uma vez que as latas
          têm grande valor para os catadores e o lacre não. Além disso, o
          manuseio de lacres é muito mais fácil do que o manuseio de latas. Os
          lacres são ideais para ambientes fechados, não acumulam volume de ar e
          água, sendo fáceis de armazenar e não atraindo insetos."
        />
      </div>

      <div className={styles.sobreContainer}>
        <h2 className={styles.bioTitle}>
          O que acontece com os lacres de latinha entregues às instituições que
          os trocam por cadeiras de rodas? Eles são derretidos e transformados
          em cadeiras de rodas?
        </h2>
      </div>

      <div className={styles.sobreContainer}>
        <img className={styles.sobreImagemPessoas} src={reciclagemImg} alt="Foto de como é feita a reciclagem"/>
      </div> <article className={styles.fonteInformacao}>Fonte: Lacre do Bem</article>

      <div className={styles.sobreContainer}>
        <h2 className={styles.bioTitle}>Doações:</h2>
        <Paragrafo
          title="Qualquer pessoa pode participar! Existem várias organizações que recebem os lacres nos pontos de coletas como shopping e temos até algumas que promovem a busca no local que o doador preferir. Para aquisição da cadeira de rodas, são necessárias aproximadamente 150 garrafas pet de 2 litros, contendo lacres de latas de alumínio dentro, para a troca por uma nova cadeira de rodas. O todo é maior que a soma das partes - Lacre do Bem."
        />
        <a className="link-topo" href="#">
          &#9650;
        </a>
      </div>
    </>
  );
}
