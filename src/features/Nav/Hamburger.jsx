import React, { useState } from "react";
import { HamburgerMenu } from "./NavBar.styled.js";
import RightNavBar from "./RightNavBar";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburgerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <RightNavBar open={open} />
    </>
  );
};

export default Hamburger;
