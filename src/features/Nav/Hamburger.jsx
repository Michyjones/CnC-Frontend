import React, { useState } from 'react';
import { HamburgerMenu } from './NavBar.styled.js';
import RightNavBar from './RightNavBar';

const Hamburger = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <HamburgerMenu click={click} onClick={()=>setClick(!click)}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <RightNavBar click={click}/>
    </>
  );
};

export default Hamburger;
