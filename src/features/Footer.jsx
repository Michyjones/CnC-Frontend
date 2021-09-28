import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Segment,
  Header,
  List,
  Divider,
  Icon,
} from "semantic-ui-react";
import { Footers, Text } from "./Footer.styled";

export default class Footer extends Component {
  render() {
    return (
      <Footers>
        <Segment vertical style={{ margin: "5em 0em 0em", padding: "5em 0em" }}>
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Link to="/">
                  <Header inverted as="h4" content="Home" />
                </Link>
                <List link inverted>
                  <List.Item as="a">
                    <Icon name="location arrow" />
                    Location
                  </List.Item>
                  <List.Item as="a">Search</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About Us" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Link to="/get-in-touch/contact">
                  <Header inverted as="h4" content="Contact Us" />
                </Link>
                <List link inverted>
                  <List.Item as="a">
                    <Icon name="phone" />
                    Phone Number: 07189899838
                  </List.Item>
                  <List.Item as="a">
                    <Icon name="mail" />
                    Email: crossandcrown@gmail.com
                  </List.Item>
                  <List.Item as="a">
                    <Icon name="location arrow" />
                    Church Location
                  </List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header
                  inverted
                  as="h1"
                  content="The Cross and Crowns Ministry"
                />
                <Text>
                  <p>
                    Discipling belivers for the Kingdom. <br />
                    Matthew 28:19.
                  </p>
                </Text>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <List horizontal inverted divided link size="small">
              <Link to="/get-in-touch/contact">
                <List.Item as="a">
                  <Icon name="mail" />
                  Contact Us &nbsp;
                </List.Item>
              </Link>
              <Link to="/get-in-touch/prayer">
                <List.Item as="a">
                  <Icon name="users" />
                  Prayer Request &nbsp;
                </List.Item>
              </Link>
              <Link to="/get-in-touch/contact">
                <List.Item as="a">
                  <Icon name="money bill alternate outline" />
                  Tithe and Offering
                </List.Item>
              </Link>
            </List>
          </Container>
        </Segment>
      </Footers>
    );
  }
}
