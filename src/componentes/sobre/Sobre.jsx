import styles from "./Sobre.module.css";
import SubtituloH2 from "../subtituloH2/SubtituloH2";
import SubtituloH3 from "../subtituloH3/SubtituloH3";
import Divisor from "../divisor/Divisor";
import fotoPerfil from "./foto_perfil.png";

export default function Sobre() {
  return (
    <section className={styles.sobre_container}>
      <div>
        <SubtituloH2>Experiência Profissional</SubtituloH2>
        <SubtituloH3>"Sou expert em instalações elétricas."</SubtituloH3>
        <Divisor />
        <p>
          Sou um eletricista inovador, conectando a inovação à realidade com
          energia renovada. Transformo visões em realidade, elevando padrões em
          sistemas elétricos residenciais e comerciais. Escolha-me para
          resultados que vão além da eletricidade, incorporando criatividade,
          eficiência e confiabilidade em cada projeto. Sou um eletricista
          inovador, conectando a inovação à realidade com energia renovada.
          Transformo visões em realidade, elevando padrões em sistemas elétricos
          residenciais e comerciais. Escolha-me para resultados que vão além da
          eletricidade, incorporando criatividade, eficiência e confiabilidade
          em cada projeto.Sou um eletricista inovador, conectando a inovação à
          realidade com energia renovada. Transformo visões em realidade,
          elevando padrões em sistemas elétricos residenciais e comerciais.
          Escolha-me para resultados que vão além da eletricidade, incorporando
          criatividade, eficiência e confiabilidade em cada projeto.
        </p>
      </div>
      <div className={styles.sobre_containerImg}>
        <img src={fotoPerfil} alt="Foto do perfil de Fernando" />
      </div>
    </section>
  );
}
