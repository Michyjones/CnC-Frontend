import React, { Component } from 'react';
import { Segment, Item, Icon, Button, Header } from 'semantic-ui-react';

class EventListItem extends Component {
  render() {
    const { event, onOpen, deleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header>{event.weeklySermon} </Item.Header>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>
                  Sermon By <a>{event.sermonBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <Icon name="calendar" />
          {event.date} |
          <Icon name="random" /> {event.series}
        </Segment>
        <Segment>
          <Icon name="video" />
          {event.video} |
          <Icon name="sound" /> {event.audio}
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>

          <Button
            onClick={deleteEvent(event.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            onClick={onOpen(event)}
            as="a"
            color="teal"
            floated="right"
            content="Edit"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
