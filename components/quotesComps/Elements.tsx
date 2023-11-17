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
