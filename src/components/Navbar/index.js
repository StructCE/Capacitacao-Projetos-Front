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
  LogOut,
} from "./styles";
import { HashLink } from 'react-router-hash-link';
import { useUserContext } from "../../hooks/useUserContext";
import { FiLogOut } from  'react-icons/fi'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useUserContext()

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
          <MiddleLink><Link to="/user">{user ? user.name : 'Logar'}</Link></MiddleLink>
          <MenuLink><HashLink to="/#paintings">Obras</HashLink></MenuLink>
          <MenuLink><HashLink to="/#aboutus">Sobre nós</HashLink></MenuLink>
          {
            user &&
              <LogOut onClick={logout}>
                <FiLogOut />
              </LogOut>
          }
        </Menu>
        <Line />
      </Nav>
    </div>
  );
};

export default Navbar;
