import React, {useState} from 'react'
import { Hamburguer, MiddleLink, Menu, Nav, MenuLink, Line } from "./styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Nav>
        <Hamburguer onClick = {() => setIsOpen(!setIsOpen)}>
          <span />
          <span />
          <span />
        </Hamburguer>
        <Menu isOpen={isOpen}>
          <MenuLink href="#">Início</MenuLink >
          <MenuLink href="#">Pintores</MenuLink >
          <MiddleLink href="#">Struct</MiddleLink>
          <MenuLink href="#">Obras</MenuLink>
          <MenuLink href="#">Sobre nós</MenuLink>
        </Menu>
        <Line/>
      </Nav>
    </div>
  );
};

export default Navbar;
