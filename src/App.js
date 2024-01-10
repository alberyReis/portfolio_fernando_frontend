import './App.css';
import Sobre from './componentes/sobre/Sobre';
import Banner from './componentes/banner/Banner';
import MenuHamburguer from "./componentes/menuHamburguer/MenuHamburguer";
import CabecalhoPadrao from "./componentes/cabecalhoPadrao/CabecalhoPadrao";
import Media from "react-media";
import Container from './componentes/container/Container';
import Servicos from './componentes/servicos/Servicos';
import Contato from './componentes/contato/Contato';
import Rodape from './componentes/rodape/Rodape';

function App() {
  return (
    <div className="App">
      <>
        <Container>
          <Media query="(max-width: 768px">
            {(matches) => {
              return matches ? <MenuHamburguer /> : <CabecalhoPadrao />;
            }}
          </Media>
          <Banner />
          <Sobre />
          <Servicos />
          <Contato />
          <Rodape />
        </Container>
      </>
    </div>
  );
}

export default App;