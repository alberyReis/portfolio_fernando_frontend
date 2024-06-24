import Botao from "../botao/Botao";
import styles from "./Banner.module.css";
import { BsTelephoneForward } from "react-icons/bs";

export default function Banner() {
  return (
    <section className={styles.banner} id="banner">
      <div className={styles.banner_container}>
        <h1 className={styles.banner_titulo}>Eletrotécnico profissional</h1>
        <h2 className={styles.banner_subtitulo}>
          Tranforme sua visão em realidade.
        </h2>
        <p className={styles.banner_texto}>
          Sou um eletrotécnico inovador, conectando a inovação à realidade com energia renovável. Transformo visões em realidade, elevando os padrões dos sistemas elétricos residenciais e comerciais. Escolha-me para resultados que vão além da eletricidade, incorporando criatividade, eficiência e confiabilidade em cada projeto. Com minha expertise e dedicação, garanto soluções que não apenas atendem, mas superam as expectativas, promovendo um futuro mais sustentável e tecnológico.
        </p>
        <div className={styles.ligueAgora_container}>
          <a href="tel: +5579981604997" rel="noreferrer" target="_blank">
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
