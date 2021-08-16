import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Hamburguer,
  MiddleLink,
  Menu,
  Nav,
  MenuLink,
  Line,
  Logo,
} from "./styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Nav>
        <Logo>la Voûte des Couleurs</Logo>
        <Hamburguer onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburguer>
        <Menu isOpen={isOpen}>
          <MenuLink><Link to="/">Início</Link></MenuLink>
          <MenuLink><Link to="/#painters">Pintores</Link></MenuLink>
          <MiddleLink><Link to="/">Struct</Link></MiddleLink>
          <MenuLink><Link to="/#paintings">Obras</Link></MenuLink>
          <MenuLink><Link to="/painter">Sobre nós</Link></MenuLink>
        </Menu>
        <Line />
      </Nav>
    </div>
  );
};

export default Navbar;
