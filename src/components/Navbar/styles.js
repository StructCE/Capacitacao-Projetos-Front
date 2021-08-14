import styled from "styled-components";

export const Nav = styled.div`
  padding: 0rem 2rem;
  /* box-shadow: 0px 24px 3px -24px #581f18; */
`;

export const Line = styled.hr`
  width: 90%;
  margin: 0 auto;
  border: none;
  height: 2px;
  color: #581f18;
  background-color: #581f18;
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
    max-height: ${({isOpen})  => (isOpen ? "100px" : "0px")};
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
  padding: 1rem 5.2rem;
  color: #581f18;
`;

export const MiddleLink = styled.a`
  padding: 1rem 5.2rem;
  color: #581f18;
  font-size: 1.4rem;
  text-decoration: none;
  font-weight: 600;
`;
