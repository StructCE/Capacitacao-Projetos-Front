import React, { useState } from "react";
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
          <MenuLink href="#">Início</MenuLink>
          <MenuLink href="#">Pintores</MenuLink>
          <MiddleLink href="#">Struct</MiddleLink>
          <MenuLink href="#">Obras</MenuLink>
          <MenuLink href="#">Sobre nós</MenuLink>
        </Menu>
        <Line />
      </Nav>
    </div>
  );
};

export default Navbar;
