import React, { Component } from "react";
import { Segment, Item, Icon, Button, Menu, Container} from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVideo,
  faAudioDescription,
  faFilePdf,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import {
  Dets,
  DetailCard,
  Wrapper,
  MenuCard,
  MenuItem,
  
} from "./home.sytled";

class EventListItem extends Component {
  render() {
    const { event, onOpen, deleteEvent } = this.props;
    return (
      <Container>
      <Wrapper>
        <Item.Group>
          <Item>
            <Item.Content>
              <Dets>
                <Item.Header>{event.weeklySermon} </Item.Header>
              </Dets>
              <DetailCard>
                <Item.Description>Sermon By {event.sermonBy}</Item.Description>
              </DetailCard>
            </Item.Content>
          </Item>
        </Item.Group>
        <DetailCard>
          <Icon name="calendar" />
          {event.date}
        </DetailCard>
        <DetailCard>
          <Icon name="random" /> {event.series}
        </DetailCard>
        <span>{event.description}</span>
        <DetailCard>
        <MenuCard>
          <Menu>
            <Menu.Item>
              <MenuItem>
                <FontAwesomeIcon icon={faVideo} /> {event.video}
              </MenuItem>
            </Menu.Item>
            <Menu.Item>
              <MenuItem>
                <FontAwesomeIcon icon={faAudioDescription} /> {event.audio}
              </MenuItem>
            </Menu.Item>
            <Menu.Item>
              <MenuItem>
                <FontAwesomeIcon icon={faFilePdf} /> {event.notes}
              </MenuItem>
            </Menu.Item>
          </Menu>
        </MenuCard>
        </DetailCard>
        <Button
          onClick={deleteEvent(event.id)}
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          onClick={onOpen(event)}
          color="teal"
          floated="right"
          content="Edit"
        />
      </Wrapper>
      </Container>
    );
  }
}

export default EventListItem;
