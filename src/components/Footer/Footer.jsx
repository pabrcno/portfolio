import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: rgb(10, 10, 10);
  flex-wrap: wrap;
`;

const Column = styled.span`
  width: 400px;
  height: 80%;
  padding: 1em;
  font-family: InputMono;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: space-around;

  a {
    z-index: 1;
    color: #40fff3a2;
    margin: 1em;
    font-size: 1.8em;
  }
`;
const Title = styled.h1`
  position: relative;
  font-family: "Syncopate-Bold";
  color: whitesmoke;
`;
const Footer = () => {
  return (
    <>
      <StyledSection>
        <Column>
          <Title>Social</Title>
          <a href="https://github.com/pabrcno">GitHub</a>
          <a href="https://www.linkedin.com/in/paulo-briceno/">LinkedIn</a>
          <a href="https://twitter.com/paulobricenog">Twitter</a>
          <a href="https://www.instagram.com/paulobricenog/">Instagram</a>
        </Column>
        <Column>
          <Title>Contact</Title>
          <a href="mailto:pabrcn@gmail.com">pabrcn@gmail.com</a>
        </Column>
        <Column>
          <Title>Currently In</Title>
          <a href="https://www.linkedin.com/in/paulo-briceno/">
            Buenos Aires, Argentina
          </a>
          <p style={{ color: "grey", fontFamily: "InputMono" }}>
            Copyright - Briceño Design 2021
          </p>
        </Column>
      </StyledSection>
    </>
  );
};

export default Footer;
