import styles from "./MenuHamburguerFechado.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MenuHamburguerFechado() {
  return (
    <nav className={styles.cabecalho}>
      <div className={styles.cabecalho_menuHamburguerFechado}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}
