import styled from 'styled-components';

export const HamburgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: none;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ click }) => (click ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ click }) => (click ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ click }) =>
        click ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ click }) => (click ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ click }) => (click ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0px 40px 40px;
  display: flex;
  position: relative;
  justify-content: space-between;
  background-image: linear-gradient(
    135deg,
    rgb(110, 22, 145) 0%,
    rgb(133, 36, 243) 69%,
    rgb(183, 70, 228) 89%
  ) !important;
  font: normal normal normal 20px/20px Montserrat;
  color: white;
  margin-bottom: -70px;
  z-index: 600;
`;

export const Ul = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    text-decoration: none;
    font: normal normal normal 17px/20px Montserrat;
    letter-spacing: 0px;
    color: white;
    display: inline-block;
    padding 1rem;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #fff 50%);
    
    background-size: 240%;
    transition: all 0.4s;
    &: hover,
    &: active{
   background-position: 100%;
   color: black;
   transform:translateX(1rem);
    }
  }

  li {
    padding: 0 20px 10px;
    font: normal normal normal 15px/15px Montserrat;
   
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: purple;
    color: #000000;
    line-height: 3rem;
    visibility: visible;
    position: fixed;
   
    top: 0;
    right: 0;
    height: 70%;
    width: ${({ click }) => (click ? '50%' : '0')};
    padding-top: 3.5rem;
    opacity: ${({ click }) => (click ? '1' : '0')};
    transition: width 0.8s, opacity 0.8s;

    li {
      color: #bf00ff;
    }
  }
`;

export const Overlay = styled.div``;
