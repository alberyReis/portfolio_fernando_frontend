import styles from "./Botao.module.css";

export default function Botao({ children, margin, alignitems }) {
  return (
    <button className={styles.botao} style={{ margin: margin }}>
      {children}
    </button>
  );
}
