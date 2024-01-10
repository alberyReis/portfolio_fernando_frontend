import styles from './contato.module.css'
import SubtituloH2 from '../subtituloH2/SubtituloH2'
import SubtituloH3 from '../subtituloH3/SubtituloH3'
import Divisor from '../divisor/Divisor'
import BlocoDeContato from '../blocoDeContato/BlocoDeContato'
import { FaLocationDot } from "react-icons/fa6";
import Formulario from '../formulario/Formulario'

export default function Contato() {
  return (
    <section className={styles.contato_container}>
      <div className={styles.contato_meiosDeContato}>
        <SubtituloH2>"Entre em contato conosco"</SubtituloH2>
        <SubtituloH3 color="white">"Você tem uma pergunta?"</SubtituloH3>
        <Divisor color="white" />
        <p className={styles.blocoDeContato_paragrafo}>
          Nunc varius ipsum sed ultricies scelerisque. Vivamus posuere venenatis
          orci et vehicula. Aliqu id rhoncus neque, eu fermentum sem. Maecenas
          ac.
        </p>
        <div className={styles.contato_icones}>
          <BlocoDeContato
            svgIcon={<FaLocationDot />}
            textoUm="Address"
            textoDois="Pekanbaru, Riau"
          />
          <BlocoDeContato
            svgIcon={<FaLocationDot />}
            textoUm="Address"
            textoDois="Pekanbaru, Riau"
          />
          <BlocoDeContato
            svgIcon={<FaLocationDot />}
            textoUm="Address"
            textoDois="Pekanbaru, Riau"
          />
          <BlocoDeContato
            svgIcon={<FaLocationDot />}
            textoUm="Address"
            textoDois="Pekanbaru, Riau"
          />
        </div>
      </div>
      <div className={styles.contato_formulario}>
        <Formulario />
      </div>
    </section>
  );
}