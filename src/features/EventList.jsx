import React, { Component } from "react";
import ListItem from "./ListItem";

class EventList extends Component {
  render() {
    const {events, onOpen, deleteEvent} = this.props;
    return (
      <div>
        <h2>This Week Message</h2>
        {events.map((event) => (
          <ListItem key={event.id} event={event}  onOpen= {onOpen} deleteEvent={deleteEvent}/>
        ))}
      </div>
    );
  }
}

export default EventList;
