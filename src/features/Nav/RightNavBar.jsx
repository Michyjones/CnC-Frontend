import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { Ul } from './NavBar.styled';

const RightNavBar = ({ click, handleClick }) => {
  return (
    <>
      <div>
        <Ul click={click}>
          <li>
            <Link onClick={handleClick} to="/">
              <Icon name="home" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick}>
              <Icon name="info" />
              About Us
            </Link>
          </li>
          <li>
            <Link to="/messages" onClick={handleClick}>
              <Icon name="folder" />
              Messages
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={handleClick}>
              <Icon name="folder" />
              Services
            </Link>
          </li>
          <li>
            <Link to="/get-in-touch/contact" onClick={handleClick}>
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
