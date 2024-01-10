import styles from './SubtituloH3.module.css'

export default function SubtituloH3({ children, color }) {
  return(
    <h3 className={styles.subtituloH3} style={{ color: color }}>
      {children}
    </h3>
  )
}