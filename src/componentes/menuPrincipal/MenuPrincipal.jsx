import styles from './MenuPrincipal.module.css'
import logo from './logo_fernando.png'

export default function MenuPrincipal() {
  return (
    <nav className={styles.menuPrincipal} id='home'>
      <img src={logo} alt="Logo do portifolio" />
      <div>
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#sobre">
            <li>Sobre</li>
          </a>
          <a href="#experiencias">
            <li>Experiências</li>
          </a>
          <a href="#servicos">
            <li>Serviços</li>
          </a>
          <a href="#contato">
            <li>Contato</li>
          </a>
        </ul>
      </div>
    </nav>
  )
}