import styles from "./contato.module.css";
import SubtituloH2 from "../subtituloH2/SubtituloH2";
import SubtituloH3 from "../subtituloH3/SubtituloH3";
import Divisor from "../divisor/Divisor";
import BlocoDeContato from "../blocoDeContato/BlocoDeContato";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Formulario from "../formulario/Formulario";

export default function Contato() {
  return (
    <section className={styles.contato_container} id="contato">
      <div className={styles.contato_meiosDeContato}>
        <SubtituloH2>"Entre em contato conosco"</SubtituloH2>
        <SubtituloH3 color="white">"Você tem uma pergunta?"</SubtituloH3>
        <Divisor color="white" />
        <p className={styles.blocoDeContato_paragrafo}>
          Estou à disposição para responder qualquer pergunta que você possa ter. Sinta-se à vontade para me perguntar o que precisar!
        </p>
        <div className={styles.contato_icones}>
          <BlocoDeContato
            href={"https://www.google.com.br/maps/place/Aracaju,+SE/@-11.0058282,-37.1837944,12z/data=!3m1!4b1!4m6!3m5!1s0x71ab04015be27cd:0x804434fd92ec3b36!8m2!3d-10.9265404!4d-37.0731147!16zL20vMDFoeTg0?hl=pt-PT&entry=ttu"}
            svgIcon={<MdOutlineLocationOn />}
            textoUm="Localização"
            textoDois="Aracaju, SE"
          />
          <BlocoDeContato
            href={"mailto: fernandoabreupetrol@gmail.com"}
            svgIcon={<MdOutlineMailOutline />}
            textoUm="Email"
            textoDois="@fernandoabreupetrol"
          />
          <BlocoDeContato
            href={"https://wa.me/5579981604997?text=Gostaria%20de%20contratar%20o%20seu%20servi%C3%A7o,%20podemos%20conversar?"}
            svgIcon={<FaWhatsapp />}
            textoUm="WhatsApp"
            textoDois="(79) 981604997"
          />
          <BlocoDeContato
            href={"https://www.instagram.com/fernandogamabreu/?igsh=MTgzOWJmNGZndWhvMg%3D%3D"}
            svgIcon={<FaInstagram />}
            textoUm="Instagram"
            textoDois="@fernandogamabreu"
          />

        </div>
      </div>
      <div className={styles.contato_formulario}>
        <Formulario />
      </div>
    </section>
  );
}
