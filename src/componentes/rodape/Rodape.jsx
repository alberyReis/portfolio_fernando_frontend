import styles from "./Rodape.module.css";
import Divisor from "../divisor/Divisor";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Rodape() {
  return (
    <footer>
      <Divisor color="white" width="100%" />
      <div className={styles.rodape_container}>
        <p>Copyright 2024 © All Right Reserved Design by Developer Reis</p>
        <div className={styles.rodape_icones}>
          <a href="#a">
            <FaFacebook />
          </a>
          <a href="#a">
            <BsInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
