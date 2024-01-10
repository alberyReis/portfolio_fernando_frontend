import Card from "../card/Card";
import SubtituloH2 from "../subtituloH2/SubtituloH2";
import SubtituloH3 from "../subtituloH3/SubtituloH3";
import styles from "./Servicos.module.css";

export default function Servicos() {
  return (
    <div className={styles.servicos_container}>
      <div className={styles.servicos_subtituloContainer}>
        <SubtituloH2>Meus Serviços</SubtituloH2>
        <SubtituloH3>"Sua satisfação é nossa preocupação."</SubtituloH3>
      </div>
      <ul className={styles.servicos_lista}>
        <Card
          habilidade="Eletricista"
          descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis obcaecati officiis. Saepe eligendi odit numquam aut neque!"
        />
        <Card
          habilidade="Eletricista"
          descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis obcaecati officiis. Saepe eligendi odit numquam aut neque!"
        />
        <Card
          habilidade="Eletricista"
          descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis obcaecati officiis. Saepe eligendi odit numquam aut neque!"
        />
        <Card
          habilidade="Eletricista"
          descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis obcaecati officiis. Saepe eligendi odit numquam aut neque!"
        />
        <Card
          habilidade="Eletricista"
          descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis obcaecati officiis. Saepe eligendi odit numquam aut neque!"
        />
        <Card
          habilidade="Eletricista"
          descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad omnis obcaecati officiis. Saepe eligendi odit numquam aut neque!"
        />
      </ul>
    </div>
  );
}
