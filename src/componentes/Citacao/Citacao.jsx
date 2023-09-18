import Texto from 'componentes/texto/Texto'
import styles from './Citacao.module.css'

export default function Citacao() {
  return (
    <div className={styles.citacao}>
      <Texto cor='white' tamanhoDaFonte='2rem' pesoDaFonte='bold'>
        <em><q>Construir é mais dificil que destruir. O primeiro ato exige dedicação, conhecimento, disciplina e precisão, já para realizar o segundo ato, apenas uma marreta é necessaria</q></em>
      </Texto>
    </div>
  )
}