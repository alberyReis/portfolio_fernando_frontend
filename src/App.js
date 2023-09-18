import Citacao from 'componentes/Citacao/Citacao';
import styles from './App.css'
import MenuPrincipal from './componentes/menuPrincipal/MenuPrincipal';
import Banner from 'componentes/banner/Banner';
import SobreMim from 'componentes/sobreMim/SobreMim';
import Experiencias from 'componentes/experiencias/Experiencias';

export default function App() {
  return (
    <div className={styles.app}>
      <MenuPrincipal />
      <Banner />
      <Citacao />
      <SobreMim />
      <Experiencias />
    </div>
  );
}
