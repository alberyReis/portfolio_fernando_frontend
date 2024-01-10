import styles from './Botao.module.css'

export default function Botao({ children, margin }) {
  return(
    <button className={ styles.botao } style={{ margin: margin}}>
      { children }
    </button>
  )
}