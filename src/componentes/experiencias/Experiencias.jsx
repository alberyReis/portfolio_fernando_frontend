import Container from 'componentes/container/Container'
import styles from './Experiencias.module.css'
import Titulo from 'componentes/titulo/Titulo'
import SubTitulo from 'componentes/subTitulo/SubTitulo'
import Texto from 'componentes/texto/Texto'

export default function Experiencias() {
  return (
    <section id='experiencias' className={styles.experiencias}>
      <Container>
        <div className={styles.experienciasContainer}>
          <div className={styles.experienciasTexto}>
            <Titulo cor='var(--cor03)'>
              Experiencias
            </Titulo>
            <SubTitulo cor='var(--cor05)' tamanhoDaFonte='3.6rem' alturaDaLinha='3.6rem' respiro='1.8rem'>
              Provendo soluções para sua contrução
            </SubTitulo>
            <hr />
            <Texto tamanhoDaFonte='1.2rem' alturaDaLinha='1.8rem' respiro='1.8rem'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at, inventore consectetur quos mollitia modi autem illum itaque aspernatur odit impedit sunt odio molestiae voluptatem ipsa? Molestiae ipsa iure tempora!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at, inventore consectetur quos mollitia modi autem illum itaque aspernatur odit impedit sunt odio molestiae voluptatem ipsa? Molestiae ipsa iure tempora!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at, inventore consectetur quos mollitia modi autem illum itaque aspernatur odit impedit sunt odio molestiae voluptatem ipsa? Molestiae ipsa iure tempora!
            </Texto>
          </div>
          <div className={styles.experienciasCard}>
            ibafusufih
          </div>
        </div>
      </Container>
    </section>
  )
}