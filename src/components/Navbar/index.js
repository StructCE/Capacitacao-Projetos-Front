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
import { HashLink } from 'react-router-hash-link';


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
          <MenuLink><HashLink to="/#painters">Pintores</HashLink></MenuLink>
          <MiddleLink><Link to="/">Struct</Link></MiddleLink>
          <MenuLink><HashLink to="/#paintings">Obras</HashLink></MenuLink>
          <MenuLink><Link to="/painter">Sobre nós</Link></MenuLink>
        </Menu>
        <Line />
      </Nav>
    </div>
  );
};

export default Navbar;
