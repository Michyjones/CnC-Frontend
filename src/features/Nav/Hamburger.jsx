import React, { useState } from 'react';
import { HamburgerMenu } from './NavBar.styled.js';
import RightNavBar from './RightNavBar';

const Hamburger = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <HamburgerMenu click={click} onClick={handleClick}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <RightNavBar click={click} onClick={handleClick}/>
    </>
  );
};

export default Hamburger;
