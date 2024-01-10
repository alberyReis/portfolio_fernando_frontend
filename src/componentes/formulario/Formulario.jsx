import Botao from "../botao/Botao";
import styles from "./Formulario.module.css";

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <h4>Entre em contato!!!</h4>
      <p>
        Nunc varius ipsum sed ultricies scelerisque. Vivamus posuere venenatis
        orci et vehicula. Aliqu id rhoncus neque, eu fermentum sem. Maecenas ac.
      </p>
      <form action="">
        <input type="text" name="nome" placeholder="Nome..." />
        <input type="text" name="email" placeholder="Email..." />
        <textarea
          name="messagem"
          cols="30"
          rows="10"
          placeholder="Mensagem..."
        />
        <Botao margin="0" alignitems='center'>Enviar Email</Botao>
      </form>
    </div>
  );
}
