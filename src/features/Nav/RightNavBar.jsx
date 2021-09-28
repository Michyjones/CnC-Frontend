import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Ul, Overlay } from "./NavBar.styled";

const RightNavBar = ({ open }) => {
  return (
    <>
      <div>
        <Ul open={open}>
          <li>
            <Link to="/">
              <Icon name="home" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Icon name="info" />
              About Us
            </Link>
          </li>
          <li>
            <Link to="/messages">
              <Icon name="folder" />
              Messages
            </Link>
          </li>
          <li>
            <Link to="/services">
              <Icon name="folder" />
              Services
            </Link>
          </li>
          <li>
            <Link to="/get-in-touch/contact">
              <Icon name="mail" />
              Contact
            </Link>
          </li>
        </Ul>
      </div>
    </>
  );
};

export default RightNavBar;
