import styles from "./CabecalhoPadrao.module.css";
import logo from "./logo_fernando_sem_fundo_02.png";

export default function CabecalhoPadrao() {
  return (
    <nav className={styles.cabecalho}>
      <div className={styles.cabecalho_containerImg}>
        <img
          src={logo}
          alt="Logomarca de Fernando Eletricista"
          className={styles.cabecalho_img}
        />
      </div>
      <ul className={styles.cabecalho_lista}>
        <a href="#banner" className={styles.cabecalho_itemDaLista}>
          <li>Inicio</li>
        </a>
        <a href="#sobre" className={styles.cabecalho_itemDaLista}>
          <li>Sobre</li>
        </a>
        <a href="#servicos" className={styles.cabecalho_itemDaLista}>
          <li>Serviços</li>
        </a>
        <a href="#contato" className={styles.cabecalho_itemDaLista}>
          <li>Contato</li>
        </a>
      </ul>
    </nav>
  );
}
