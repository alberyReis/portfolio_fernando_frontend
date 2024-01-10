import Botao from '../botao/Botao'
import styles from './Formulario.module.css'

export default function Formulario() {
  return(
    <div className={styles.formulario}>
      <h4>Entre em contato!!!</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat architecto magnam aspernatur voluptatibus eligendi sapiente doloribus eius nesciunt tempore iste quis tenetur, nulla delectus incidunt velit voluptatum omnis et.</p>
      <form action="">
        <input type="text" name="nome" placeholder='Nome...' />
        <input type="text" name='email' placeholder='Email...'/>
        <textarea name="messagem" cols="30" rows="10" placeholder='Mensagem...' />
        <Botao margin='0'>Enviar Email</Botao>
      </form>
    </div>
  )
}