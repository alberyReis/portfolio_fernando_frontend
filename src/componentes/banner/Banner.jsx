import Botao from "../botao/Botao";
import styles from "./Banner.module.css";
import { BsTelephoneForward } from "react-icons/bs";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.banner_container}>
        <h1 className={styles.banner_titulo}>Eletricista profissional</h1>
        <h2 className={styles.banner_subtitulo}>
          Tranforme sua visão em realidade.
        </h2>
        <p className={styles.banner_texto}>
          Sou um eletricista inovador, conectando a inovação à realidade com
          energia renovada. Transformo visões em realidade, elevando padrões em
          sistemas elétricos residenciais e comerciais. Escolha-me para
          resultados que vão além da eletricidade, incorporando criatividade,
          eficiência e confiabilidade em cada projeto
        </p>
        <div className={styles.ligueAgora_container}>
          <a href="#a">
            <Botao>
              <BsTelephoneForward />
              Ligue agora
            </Botao>
          </a>
        </div>
      </div>
    </section>
  );
}
