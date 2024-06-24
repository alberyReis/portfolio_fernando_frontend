import styles from "./Rodape.module.css";
import Divisor from "../divisor/Divisor";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Rodape() {
  return (
    <footer>
      <Divisor color="white" width="100%" />
      <div className={styles.rodape_container}>
        <p>Copyright 2024 © All Right Reserved Design by Developer Reis</p>
        <div className={styles.rodape_icones}>
          <a href="https://wa.me/5579981604997?text=Gostaria%20de%20contratar%20o%20seu%20servi%C3%A7o,%20podemos%20conversar?" rel="noreferrer" target="_blank" >
            <FaWhatsappSquare />
          </a>
          <a href="https://www.linkedin.com/in/fernando-abreu-37050257" rel="noreferrer" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
