import React, { Component } from "react";
import ListItem from "./ListItem";
import {Dets} from "./home.sytled"

class EventList extends Component {
  render() {
    const {events, onOpen, deleteEvent} = this.props;
    return (
      <div>
        <Dets>This Week's Message</Dets>
        {events.map((event) => (
          <ListItem key={event.id} event={event}  onOpen= {onOpen} deleteEvent={deleteEvent}/>
        ))}
      </div>
    );
  }
}

export default EventList;
