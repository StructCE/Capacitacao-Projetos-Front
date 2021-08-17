import React from "react";
import {
  Container,
  Title,
  Links,
  LinksDiv,
  Best,
  BottomGradient,
} from "./styles";

const Footer = () => {
  return (
    <>
      <BottomGradient>
        <div className="gradient" />
      </BottomGradient>

      <Container>
        <Title>Onde nos Encontrar</Title>

        <LinksDiv>
          <Links href="https://github.com/BomDia12" target="_blank">
            Arthur Mota Furtado
          </Links>

          <Links href="https://github.com/guilodron" target="_blank">
            Guilherme Rodrigues
          </Links>

          <Links href="https://github.com/carvalhoiago" target="_blank">
            Iago Carvalho
          </Links>

          <Links href="https://github.com/DraculK" target="_blank">
            Kayran
          </Links>
        </LinksDiv>

        <Best>Desenvolvido pela melhor Diretoria</Best>
      </Container>
    </>
  );
};

export default Footer;
