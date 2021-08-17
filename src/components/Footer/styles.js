import styled from "styled-components";

export const Container = styled.div`
  background-color: #581F18;
  text-align: center;
  
`

export const BottomGradient = styled.div`
  .gradient {
    height: 80px;
    position: relative;
    z-index: 10;
    display: flex;
    flex: 1;
    background: linear-gradient(to bottom,#ffffff00, #581F18);
  }
`

export const Title = styled.h1`
  padding-top: 1rem;
  color: #F4D6CC;
  text-align: center;
  padding-bottom: 1.rem;
`

export const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Links = styled.a`
  font-size: large;
  color: #8EAF9D;
  text-decoration: none;
  padding-top: 0.8rem;
  transition: all 0.4s ease-in-out;

  &:hover{
    color: #415a77;
    font-size: x-large;
  }
`

export const Best = styled.h2`
  padding: 2rem;
  font-size: x-large;
  color: #F4D6CC;
`

