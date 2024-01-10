import Divisor from '../divisor/Divisor'
import styles from './Card.module.css'

export default function Card({ habilidade, descricao }) {
  return (
    <li className={styles.card_itemDaLista}>
      <h4 className={styles.card_subtitulo}>{habilidade}</h4>
      <Divisor />
      <p>{descricao}</p>
    </li>
  );
}