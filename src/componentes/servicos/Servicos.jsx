import Card from "../card/Card";
import SubtituloH2 from "../subtituloH2/SubtituloH2";
import SubtituloH3 from "../subtituloH3/SubtituloH3";
import styles from "./Servicos.module.css";

export default function Servicos() {
  return (
    <div className={styles.servicos_container} id="servicos">
      <div className={styles.servicos_subtituloContainer}>
        <SubtituloH2>Meus Serviços</SubtituloH2>
        <SubtituloH3>"Sua satisfação é a minha preocupação."</SubtituloH3>
      </div>
      <ul className={styles.servicos_lista}>
        <Card
          habilidade="Elétrica Predial
"
          descricao="Sou especialista em elétrica predial, oferecendo soluções seguras e eficientes para residências e edifícios, garantindo conforto e funcionalidade em cada projeto."
        />
        <Card
          habilidade="Elétrica Residencial"
          descricao="Como eletricista residencial, proporciono soluções elétricas seguras e eficientes para sua casa, garantindo conforto e tranquilidade no seu lar."
        />
        <Card
          habilidade="Elétrica Industrial"
          descricao="Como eletricista industrial, ofereço soluções especializadas para sistemas elétricos complexos, focando em eficiência e segurança para maximizar a produtividade industrial."
        />
        <Card
          habilidade="Montagem de Quadros"
          descricao="Sou especialista em montagem de quadros elétricos, garantindo instalações precisas e seguras para atender às necessidades elétricas específicas de cada projeto."
        />
        <Card
          habilidade="Interpretação de Projetos"
          descricao="Com expertise em interpretação de projetos, traduzo planos complexos em soluções viáveis e eficientes, garantindo precisão e qualidade na execução."
        />
        <Card
          habilidade="Instalação de Relógio da Energisa"
          descricao="Realizo a instalação de relógios da Energisa com precisão e conforme todas as normas exigidas, assegurando um serviço confiável e eficiente para sua residência ou estabelecimento."
        />
        <Card
          habilidade="Automoção Residencial"
          descricao="Sou especialista em automação residencial, oferecendo soluções personalizadas que integram tecnologia e conforto, proporcionando praticidade e eficiência energética para sua casa."
        />
        <Card
          habilidade="Segurança Eletrônica"
          descricao="Como especialista em segurança eletrônica, desenvolvo e implemento soluções avançadas para proteger residências e negócios, utilizando tecnologia de ponta para garantir tranquilidade e proteção."
        />
      </ul>
    </div>
  );
}
