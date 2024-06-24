import styles from "./MenuHamburguerAberto.module.css";
import { IoCloseSharp } from "react-icons/io5";


export default function MenuHamburguerAberto() {
  return (
    <nav className={styles.cabecalho}>
      <div className={styles.cabecalho_menuHamburguerAberto}>
        <IoCloseSharp />
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
