import styles from './Banner.module.css'
import Titulo from 'componentes/titulo/Titulo';
import SubTitulo from 'componentes/subTitulo/SubTitulo';
import Texto from 'componentes/texto/Texto';
import Btn from 'componentes/btn/Btn'
import { BiLinkExternal } from 'react-icons/bi'

export default function Banner({ children }) {
  return (
    <div className={styles.banner}>
      <div className={styles.containerBanner}>
        <Titulo cor='var(--cor03)' tamanhoDaFonte='25px' maiuscula='uppercase' respiro='1.5rem'>
          Profissional preparado de contrução
        </Titulo>
        <SubTitulo cor='var(--cor01)' tamanhoDaFonte='100px' alturaDaLinha='5.5rem'>
          Tranforme sua visão em realidade
        </SubTitulo>
        <Texto tamanhoDaFonte='20px' respiro='2rem'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro at, inventore consectetur quos mollitia modi autem illum itaque aspernatur odit impedit sunt odio molestiae voluptatem ipsa? Molestiae ipsa iure tempora!
        </Texto>
      </div>
      <div className={styles.containerBannerLigacao}>
        <Btn>
          <BiLinkExternal />
          <p>Ligar</p>
        </Btn>
        <Texto cor='var(--cor01)' tamanhoDaFonte='1.5rem' pesoDaFonte='bold'>
          (79) 991750909
        </Texto>
      </div>
    </div>
  )
}