import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Container, Image, Dropdown, Icon } from "semantic-ui-react";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    const options = [
      { key: 1, text: "Sunday Service", value: 1 },
      { key: 2, text: "Bible Study", value: 2 },
      { key: 3, text: "Children Ministry", value: 3 },
    ];
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <Image src="/assests/cncLogo.jpeg" avatar />
            &nbsp; THE CROSS & CROWNS MINISTRY
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Icon name="home" />
            Home
          </Menu.Item>

          <Menu.Item
            as={Link}
            position="left"
            to="/about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          >
            <Icon name="info" />
            About Us
          </Menu.Item>

          <Menu.Item
            as={Link}
            position="right"
            to="/messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          >
            <Icon name="folder" />
            Messages
          </Menu.Item>

          <Menu.Item as={Link} name="Services" position="right" to="#" />

          <Dropdown options={options} simple item />

          <Menu.Item
            as={Link}
            position="left"
            to="/get-in-touch/contact"
            active={activeItem === "get-in-touch/contact"}
            onClick={this.handleItemClick}
          >
            <Icon name="mail" />
            Contact
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}
