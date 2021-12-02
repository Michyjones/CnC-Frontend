import React from 'react';
import { Image } from 'semantic-ui-react';
import { Nav, LeftNav } from './NavBar.styled';
import Hamburger from './Hamburger';

const Navbar = () => {
  return (
    <Nav>
      <LeftNav>
        <div>
          <Image src="/assests/cncLogo.jpeg" avatar />
          &nbsp; THE CROSS & CROWNS MINISTRY
        </div>
      </LeftNav>
      <Hamburger />
    </Nav>
  );
};

export default Navbar;
