import Container from 'componentes/container/Container'
import styles from './SobreMim.module.css'
import Titulo from 'componentes/titulo/Titulo'
import SubTitulo from 'componentes/subTitulo/SubTitulo'
import Texto from 'componentes/texto/Texto'
import fotoPerfil from './fotoPerfil.jpg'

export default function SobreMim() {
  return (
    <section className={styles.sobreMim}  id='sobre'>
      <Container>
        <div className={styles.sobreMimContainer}>
          <div className={styles.sobreMimTexto}>
            <Titulo cor='var(--cor03)'>
              Sobre mim
            </Titulo>
            <SubTitulo cor='var(--cor01)' tamanhoDaFonte='3.6rem' alturaDaLinha='3.6rem' respiro='1.8rem'>
              Fornecendo soluções para contrução.
            </SubTitulo>
            <hr />
            <Texto tamanhoDaFonte='1.2rem' alturaDaLinha='1.8rem' respiro='1.8rem'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at, inventore consectetur quos mollitia modi autem illum itaque aspernatur odit impedit sunt odio molestiae voluptatem ipsa? Molestiae ipsa iure tempora!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at, inventore consectetur quos mollitia modi autem illum itaque aspernatur odit impedit sunt odio molestiae voluptatem ipsa? Molestiae ipsa iure tempora!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at, inventore consectetur quos mollitia modi autem illum itaque aspernatur odit impedit sunt odio molestiae voluptatem ipsa? Molestiae ipsa iure tempora!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at, inventore consectetur quos mollitia modi autem illum itaque aspernatur odit impedit sunt odio molestiae voluptatem ipsa? Molestiae ipsa iure tempora!
            </Texto>
          </div>
          <div className={styles.sobreMimImg}>
            <img src={fotoPerfil} alt="Foto de Fernando" />
          </div>
        </div>
      </Container>
    </section>
  )
}