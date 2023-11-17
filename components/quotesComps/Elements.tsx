import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const BackgroundComponent = styled.div`
  position: fixed;
  background: linear-gradient(to right, #0b7dae, #c28d);
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
  height: 100vh;
  width: 100vw;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const BackgroundImage1 = styled(Image)`
  position: relative;
  opacity: 0.5;
  z-index: 2;
  margin-left: 0px;
  margin-top: 0px;
  scale: 0.8;
`;

export const FooterComponent = styled.footer`
  width: 100vw;
  height: 10vh;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: #fff;
  z-index: 10;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;

export const QuoteGeneratorContainer = styled.div`
  min-height: 350px;
  min-width: 350px;
  height: 70vh;
  width: 70vw;
  border: 2px solid口#ffffff22;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 20;
  background: rgba(0, 0, 70, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const QuoteGeneratorComponent = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
`;

export const QuoteGeneratorTitle = styled.h1`
  font-family: 'Courier New', Courier, monospace;
  font-size: 50px;
  text-align: center;
  color: #fff;
  padding: 0px 20px 0 20px;
  position: relative;
  /* for mobile */
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const QuoteGeneratorDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  text-align: center;
  color: #fff;
  padding: 0px 20px 0 20px;
  position: relative;
  /* for mobile */
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const QuoteGeneratorButton = styled.div`
  height: 100px;
  width: 300px;
  border: 2px solid grey;
  border-radius: 15px;
  margin-top: 20px;
  position: relative;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  top: 20px;
  margin: auto;
  transform-origin: center;
  background: rgba(0, 0, 70, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    filter: brightness(3);
    transition: 0.2s all ease-in-out;
    transform: scale(1.1);
    transform-origin: center;
  }
`;

export const ButtonText = styled.p`
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
  font-size: 35px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 100%;
  text-align: center;
`;
