import styled from "styled-components";
import img from "../../assests/mountain.jpg";

export const HamburgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #f1f1f1;
  padding: 20px o 20px;
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
  }

  li {
    padding: 0 20px 20px;
    font: normal normal normal 15px/15px Montserrat;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000000;
    color: #000000;
    line-height: 3rem;

    position: absolute;

    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 70vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #bf00ff;
    }
  }
`;

export const Overlay = styled.div`
  visibility: visible;
`;
