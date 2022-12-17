import { Header } from "../components/Header";
import { Paragrafo } from "../components/Paragrafo";

import doacoesImg from "../assets/LacreDoBem.png";
import aneisSolidarios from "../assets/aneisSolidarios.png";

import styles from "../styles/pages/doacoes.module.css";

export function Doacoes() {
  return (
    <div>
      <Header title="Como posso ajudar?" />
      <h2 className={styles.title}>
        {" "}
        A troca de lacres de latinha de alumínio por cadeiras de rodas é feita por empresas que estão desenvolvendo trabalhos de responsabilidade social, além de entidades sems fins lucrativos. Vejamos alguns exemplos:{" "}
      </h2>
      <div className={styles.sobreDoacoes}>
        <div className={styles.sobreDoacoes}>
          <h2 className={styles.bioImg}>
            {" "}
            <img src={doacoesImg} alt="Slogan do lacre do bem" />
          </h2>

          <Paragrafo title="Em 2013, aos nove anos de idade, Julia Macedo, começou a juntar lacres de latinhas de alumínio para comprar e doar uma cadeira de rodas. A ideia surgiu quando a família recebeu em agradecimento, um origami,  ao ajudar uma instituição que cuida de crianças com paralisia cerebral. Ela ficou tão tocada com o gesto que decidiu fazer mais. A missão não era fácil, pois, para comprar mais uma cadeira de rodas são necessários o equivalente a 140 garrafas pets, ou seja, 352 mil lacres (105 quilos). Mas Julia não desistiu. Pediu ajuda para a família, amigos, espalhou cartazes e bilhetinhos na escola onde estuda e a campanha foi crescendo. Foi assim que surgiu o Lacre do Bem, um projeto que hoje é conduzido com o apoio de voluntários, escolas e empresas parceiras por todo o Brasil." />
        </div>
      </div>

      <div className={styles.sobreDoacoes}>
        <div className={styles.sobreDoacoes}>
          <h2 className={styles.bioImg}>
            {" "}
            <img src={aneisSolidarios} alt="Slogan dos anéis solidários" />
          </h2>

          <Paragrafo title="A colaboração da Marcon Indústria Metalúrgica com a campanha Anéis Solidários se inicia em 2010. A trajetória do projeto conta com o engajamento dos colaboradores em uma ação social em prol da comunidade carente. O objetivo da campanha é arrecadar lacres de alumínio das latinhas de bebidas para que os mesmos, após serem vendidos, reverta-se em fundos para a compra de cadeiras de rodas. Desta forma, atende-se as pessoas carentes com limitações de locomoção, proporcionando mais independência ao cidadão deficiente ou àqueles com dificuldade de locomoção, oportunizando a eles o direito de ir e vir a todos os lugares que desejarem e assim reinseri-los ao convívio social. Em pouco tempo, essa iniciativa foi ganhando forças através do boca a boca realizado junto a clientes, fornecedores e estabelecimentos frequentados por colaboradores da empresa e, pouco a pouco, diversos estabelecimentos da cidade e da região também aderiram à campanha tornando-se postos de arrecadação. A campanha pouco a pouco se espalhou pela cidade, contando com a colaboração cada vez mais crescente de entidades e associações que aderiram ao projeto e impulsionaram fortemente as arrecadações de lacres. O uso das redes sociais angariou e mobilizou novas contribuições. Hoje já são mais de 507 cadeiras de rodas doadas que representam 507 vidas transformadas. Ao doar os Anéis das latinhas à Campanha Anéis Solidários, você contribui para a transformação da vida de centenas de pessoas." />
        </div>
      </div>

      <h2 className={styles.titleVideo}>
        Vídeo Institucional Lacre do Bem 2019:
        <iframe
          className={styles.videoYouTube}
          width="854"
          height="480"
          src="https://www.youtube.com/embed/EgA5ADxBAXE"
          title="Vídeo Institucional Lacre do Bem 2019"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <article className={styles.fonteLacre}>Fonte - Lacre do Bem.</article>
      </h2>
      <a className="link-topo" href="#">
          &#9650;
        </a>
    </div>
  );
}
