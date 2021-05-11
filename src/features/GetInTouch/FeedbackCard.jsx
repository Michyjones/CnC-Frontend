import React from "react";
import { Link } from "react-router-dom";
import { Container, Icon } from "semantic-ui-react";
import Footer from "../Footer";

import {
  MessageCard,
  MessageCardText,
  MessageText,
  PurpleButton,
  ButtonIcon,
  Success,
  Href,
} from "./GetInTouch.styled";

const FeedbackCard = () => {
  return (
    <>
      <Container>
        <MessageCard>
          <MessageCardText>
            <ButtonIcon></ButtonIcon>
            <MessageText>
              Thank you! Someone from our team will be in touch soon.
              <Href>
                <hr />
              </Href>
            </MessageText>
            <Success>
              <Link to={"/"}>
                <PurpleButton type="submit">Done</PurpleButton>
              </Link>
            </Success>
          </MessageCardText>
        </MessageCard>
      </Container>
      <Footer />
    </>
  );
};

export default FeedbackCard;
