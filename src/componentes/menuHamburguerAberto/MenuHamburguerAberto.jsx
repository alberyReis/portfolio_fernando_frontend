import styles from "./MenuHamburguerAberto.module.css";
import { FaRegWindowClose } from "react-icons/fa";

export default function MenuHamburguerAberto() {
  return (
    <nav className={styles.cabecalho}>
      <div className={styles.cabecalho_menuHamburguerAberto}>
        <FaRegWindowClose />
      </div>
      <ul className={styles.cabecalho_lista}>
        <a href="#a" className={styles.cabecalho_itemDaLista}>
          <li>Inicio</li>
        </a>
        <a href="#a" className={styles.cabecalho_itemDaLista}>
          <li>Sobre</li>
        </a>
        <a href="#a" className={styles.cabecalho_itemDaLista}>
          <li>Serviços</li>
        </a>
        <a href="#a" className={styles.cabecalho_itemDaLista}>
          <li>Contato</li>
        </a>
      </ul>
    </nav>
  );
}
