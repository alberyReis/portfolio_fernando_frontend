import { useState } from "react";
import MenuHamburguerFechado from "../menuHamburguerFechado/MenuHamburguerFechado";
import MenuHamburguerAberto from "../menuHamburguerAberto/MenuHamburguerAberto";

export default function MenuHamburguer() {
  const [menuTooggle, setmenuTooggle] = useState(<MenuHamburguerFechado />);
  const [boleano, setBoleano] = useState(true);

  const fecharEAbrirMenu = (e) => {
    if (boleano) {
      setmenuTooggle(<MenuHamburguerFechado />);
      setBoleano(false);
    } else if (!boleano) {
      setmenuTooggle(<MenuHamburguerAberto />);
      setBoleano(true);
    }
  };

  return (
    <>
      <div onClick={fecharEAbrirMenu}>{menuTooggle}</div>
    </>
  );
}
