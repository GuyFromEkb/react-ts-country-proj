import styled, { keyframes } from "styled-components";
import Container from "./Container";

const scroll = keyframes`
    50%{background-size:80%}
    100%{background-position:125% 0;}
`;

const PreloaderStyled = styled.div`
  max-width: inherit;
  height: 5px;
  background: linear-gradient(to right, ${({ theme }) => theme["ui-base"]}, ${({ theme }) => theme["ui-base"]});
  background-color: ${({ theme }) => theme.text};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 4px;
  background-size: 20%;
  background-repeat: repeat-y;
  background-position: -25% 0;
  animation: ${scroll} 1.2s ease-in-out infinite;
`;

const Preloader = () => {
  return (
    <Container>
      <PreloaderStyled />
    </Container>
  );
};

export default Preloader;
