import styles from "./BlocoDeContato.module.css";

export default function BlocoDeContato({ href, svgIcon, textoUm, textoDois }) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      <div className={styles.blocoDeContato_container}>
        <div className={styles.blocoDeContato_svg}>{svgIcon}</div>
        <div className={styles.blocoDeContato_containerTexto}>
          <p className={styles.blocoDeContato_textoUm}>{textoUm}</p>
          <p className={styles.blocoDeContato_textoDois}>{textoDois}</p>
        </div>
      </div>
    </a>
  );
}
