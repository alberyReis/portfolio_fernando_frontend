import styles from "./Sobre.module.css";
import SubtituloH2 from "../subtituloH2/SubtituloH2";
import SubtituloH3 from "../subtituloH3/SubtituloH3";
import Divisor from "../divisor/Divisor";
import fotoPerfil from "./foto_perfil.jpeg";

export default function Sobre() {
  return (
    <section className={styles.sobre_container} id="sobre">
      <div>
        <SubtituloH2>Experiência Profissional</SubtituloH2>
        <SubtituloH3>"Sou expert em instalações elétricas."</SubtituloH3>
        <Divisor />
        <p>
          Sou um Técnico em Eletrotécnica com uma trajetória profissional sólida e diversificada. Minha formação técnica é complementada por uma série de cursos profissionalizantes, incluindo eletricista predial, eletricista de manutenção industrial, CLP e comandos elétricos, entre outros.
        </p>
        <p>
          Com mais de 12 anos de experiência em manutenção elétrica, tenho um histórico comprovado de atuação em diversos ambientes, como estádios de futebol, hospitais e, mais recentemente, supermercados. Minha expertise abrange uma ampla gama de serviços, desde a manutenção preventiva e corretiva de quadros de comando e circuitos até dispositivos e equipamentos complexos, como geradores e No-breaks.
        </p>
        <p>
          Meu compromisso com a excelência e a disponibilidade para atender fins de semana me permitem resolver prontamente problemas de mau funcionamento ou paradas de equipamentos, garantindo a continuidade operacional para meus clientes. O registro ativo no CFT reforça minha dedicação à profissão e meu compromisso com a qualidade e segurança em cada projeto que realizo.
        </p>
        <p>
          Estou sempre em busca de novas oportunidades para aplicar meu conhecimento técnico, trazendo inovação e eficiência para cada desafio que enfrento. Minha carreira é marcada pela habilidade de transformar problemas complexos em soluções práticas e eficazes, elevando os padrões de qualidade e confiabilidade em todos os serviços prestados.
        </p>
      </div>
      <div className={styles.sobre_containerImg}>
        <img src={fotoPerfil} alt="Foto do perfil de Fernando" />
      </div>
    </section>
  );
}
