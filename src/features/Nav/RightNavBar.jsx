import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { Ul, Overlay } from './NavBar.styled';
import { useState } from 'react';

const RightNavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Overlay>
          <Ul open={open} onClick={() => setOpen(!open)}>
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
        </Overlay>
      </div>
    </>
  );
};

export default RightNavBar;
