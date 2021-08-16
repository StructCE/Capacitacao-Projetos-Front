import styled from "styled-components";

export const Nav = styled.div`
  padding: 0rem 2rem;
  /* box-shadow: 0px 24px 3px -24px #581f18; */

  @media (max-width: 768px) {
    padding: 0rem 0rem;
  }
`;

export const Line = styled.hr`
  width: 90%;
  margin: 0 auto;
  border: none;
  height: 2px;
  color: #581f18;
  background-color: #581f18;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Hamburguer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-top: 5px;

  span{
    height: 2px;
    width: 25px;
    background-color: #581f18;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen})  => (isOpen ? "300px" : "0px")};
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLink = styled.div`
  padding: 1rem 5.2rem;

  a {
    text-decoration: none;
    font-size: 1.3rem;
    color: #581f18;
    transition: all .2s;

  
    &:hover{
      color: #415a77;
    }
  }
`;

export const MiddleLink = styled.div`
  padding: 1rem 5.2rem;

  a {
    color: #581f18;
    font-size: 1.4rem;
    text-decoration: none;
    font-weight: 600;
    transition: all .2s;
  
    &:hover{
      color: #415a77;
    }
  }
`;

export const Logo = styled.h1`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    color: #581f18;
    text-decoration: none;
    font-size: 2rem;
    
  }
`;