import { useState } from "react";
import Botao from "../botao/Botao";
import styles from "./Formulario.module.css";
import emailjs from '@emailjs/browser'

export default function Formulario() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className={styles.formulario}>
      <h4>Entre em contato!!!</h4>
      <p>
        Por favor, preencha o formulário e entrarei em contato o mais breve possível para ajudar com suas necessidades.
      </p>
      <form onSubmit={event => {
        event.preventDefault()

        if (name === '' || email === '' || message === '') {
          alert("Preencha todos os campos!")
          return
        }

        const templateParams = {
          name,
          email,
          message
        }

        emailjs.send("service_ppc269m", "template_i0qbdtz", templateParams, "op5F594hbSzdN-vfW")
          .then((response) => {
            alert("Mensagem enviada com sucesso!")
            console.log("EMAIL ENVIADO:", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
          }, (err) => {
            console.log("ERRO: ", err)
          })
      }}>
        <input type="text"
          name="nome"
          placeholder="Nome..."
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <input
          type="text"
          name="email"
          placeholder="Email..."
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
        <textarea
          name="messagem"
          cols="30"
          rows="10"
          placeholder="Mensagem..."
          onChange={event => setMessage(event.target.value)}
          value={message}
        />
        <Botao margin="0" alignitems="center">
          Enviar Email
        </Botao>
      </form>
    </div>
  );
}
