import React, { Component } from "react";
import { Segment, Form, Button, Menu } from "semantic-ui-react";

const intialState = {
  weeklySermon: "",
  title: "",
  sermonBy: "",
  date: "",
  series: "",
  description: "",
  video: "",
  audio: "",
  notes: "",

};

class FormHandler extends Component {
  state = {
    event: intialState,
  };
  componentDidMount() {
    if (this.state.selected !== null) {
      this.setState({
        event: this.props.selected,
      });
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.setState({
        event: nextProps.selected || intialState,
      });
    }
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };
  onInputChange = (evt) => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent,
    });
  };
  render() {
    const { handleCancel } = this.props;
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>This Sunday Sermon</label>
            <input
              name="weeklySermon"
              onChange={this.onInputChange}
              value={event.weeklySermon}
              placeholder="Weekly Sermon"
            />
          </Form.Field>

          <Form.Field>
            <label>Sermon By:</label>
            <input
              name="sermonBy"
              onChange={this.onInputChange}
              value={event.sermonBy}
              placeholder="Pastor/Preacher Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <input
              name="date"
              type="date"
              onChange={this.onInputChange}
              value={event.date}
              placeholder="Select the date"
            />
          </Form.Field>
          <Form.Field>
            <label>Series</label>
            <input
              name="series"
              onChange={this.onInputChange}
              value={event.series}
              placeholder="Sermon series"
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <textarea
              name="description"
              onChange={this.onInputChange}
              value={event.description}
              placeholder="Decription of the Message"
            />
          </Form.Field>
          <Form.Field>
            <label>Video Upload</label>
            <input
              name="video"
              onChange={this.onInputChange}
              value={event.video}
              placeholder="Upload Video"
            />
          </Form.Field>
          <Form.Field>
            <label>Upload Audio</label>
            <input
              name="audio"
              onChange={this.onInputChange}
              value={event.audio}
              type="file"
              placeholder="Upload audio"
            />
          </Form.Field>
          <Form.Field>
            <label>Upload Notes</label>
            <input
              name="notes"
              onChange={this.onInputChange}
              value={event.notes}
              placeholder="Upload notes"
            />
          </Form.Field>
          <Button primary type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default FormHandler;
