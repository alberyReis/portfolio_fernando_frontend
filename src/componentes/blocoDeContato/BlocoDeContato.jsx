import styles from './BlocoDeContato.module.css'


export default function BlocoDeContato({ svgIcon, textoUm, textoDois}) {
  return (
    <a href="#a">
      <div className={styles.blocoDeContato_container}>
        <div className={styles.blocoDeContato_svg}>
          {svgIcon}
        </div>
        <div className={styles.blocoDeContato_containerTexto}>
          <p className={styles.blocoDeContato_textoUm}>{textoUm}</p>
          <p className={styles.blocoDeContato_textoDois}>{textoDois}</p>
        </div>
      </div>
    </a>
  );
}