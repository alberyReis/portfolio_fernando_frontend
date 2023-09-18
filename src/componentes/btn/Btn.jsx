import styles from './Btn.module.css'

export default function Btn({ redirecionar, submeter, children }) {
  return (
    <button
      className={styles.btn}
      onClick={redirecionar}
      onSubmit={submeter}
    >
      {children}
    </button>
  )
}