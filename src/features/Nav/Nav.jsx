import React from "react";
import { Image } from "semantic-ui-react";
import { Nav } from "./NavBar.styled";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Image src="/assests/cncLogo.jpeg" avatar />
        &nbsp; THE CROSS & CROWNS MINISTRY
      </div>
      <Hamburger />
    </Nav>
  );
};

export default Navbar;
