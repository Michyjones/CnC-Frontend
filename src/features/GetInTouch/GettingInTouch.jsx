import React from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useLocation,
} from "react-router-dom";

import Contact from "./Contact";
import PrayerRequest from "./PrayerRequest";

import {
  Container,
  Content,
  Header,
  MenuLinks,
  FormSection,
  MenuLink,
  MenuLinkWrapper,
  Side,
  ImageContainer,
  ImageWrapper,
} from "./GetInTouch.styled";
import NavBar from "../NavBar";
import Footer from "../Footer";

const GetInTouch = () => {
  const match = useRouteMatch();
  const location = useLocation();
  return (
    <>
      <NavBar />
      <Container>
        <Side>
          <ImageWrapper>
            <ImageContainer />
          </ImageWrapper>
        </Side>
        <Content>
          <Header>Let&apos;s talk...</Header>
          <MenuLinks>
            <MenuLinkWrapper>
              <Link to={`${match.url}/contact`}>
                <MenuLink active={location.pathname.includes("/contact")}>
                  Contact Us
                </MenuLink>
              </Link>
            </MenuLinkWrapper>
            <MenuLinkWrapper>
              <Link to={`${match.url}/prayer`}>
                <MenuLink active={location.pathname.includes("/prayer")}>
                  Prayer Request
                </MenuLink>
              </Link>
            </MenuLinkWrapper>
          </MenuLinks>
          <FormSection>
            <Switch>
              <Route path={`${match.url}/contact`}>
                <Contact />
              </Route>
              <Route path={`${match.url}/prayer`}>
                <PrayerRequest />
              </Route>
            </Switch>
          </FormSection>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default GetInTouch;
