import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Image,
  Menu,
  Button,
} from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cuid from 'cuid';
import {
  faVideo,
  faAudioDescription,
  faFilePdf,
  faFileWord,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import {
  Body,
  Header,
  Dets,
  Details,
  DetailCard,
  Wrapper,
  MenuCard,
  MenuItem,
  Text,
  Space,
} from './home.sytled';
import Footer from './Footer';
import FormHandler from './FormHandler';
import EventList from './EventList';
import {
  createEvent,
  updateEvent,
  deleteEvent,
} from '../features/eventActions';

const mapState = (state) => ({
  events: state.events,
});

const actions = {
  createEvent,
  updateEvent,
  deleteEvent,
};

class Home extends Component {
  state = {
    isOpen: false,
    selected: null,
  };
  handleFormOpen = (open) => {
    this.setState({
      selected: open,
      isOpen: true,
    });
  };
  handleCancel = () => {
    this.setState({
      isOpen: false,
    });
  };
  handleOpen = (eventToOpen) => () => {
    this.setState({
      selected: eventToOpen,
      isOpen: true,
    });
  };
  handleUpdate = (updatedEvent) => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selected: null,
    });
  };
  createNewEvent = (newEvent) => {
    newEvent.id = cuid();
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false,
    });
  };
  handleDelete = (eventId) => () => {
    this.props.deleteEvent(eventId);
  };
  render() {
    const { selected } = this.state;
    const { events } = this.props;
    return (
      <>
        <Container className="main">
          <Grid>
            <Body>
              <Image
                src="/assests/mountain.jpg"
                alt="logo"
                height={500}
                width={1200}
                position="absolute"
              />
              <Text>
                "DISCIPLING BELIEVERS FOR THE KINGDOM."
                <Space> MATTHEW 28:19</Space>
              </Text>
            </Body>
            <Grid.Column width={8}>
              <Header>WELCOME TO THE CROSS AND CROWNS MINISTRY</Header>
              <Image src="/assests/CnCLG.jpg" height={400} width={500} />

              <p>
                The Holy Spirit is Speaking.
                <br /> i. From our head scripture we notice that the Holy Spirit
                is speaking to the churches “He who has an ear, let him hear
                what the Spirit says to the churches”.
                <br /> ii. There are questions here that we need answers for.
                <br /> a. WHO is the source of the message the Holy Spirit is
                speaking?
                <br />
                b. WHERE is the Holy Spirit residing?
                <br /> c. WHAT is the context of what the Holy Spirit is saying?
                <br />
                d. WHAT message is the Holy Spirit announcing to the churches?
                <br />
                e. HOW is the Holy Spirit speaking? 2. WHO is the source of the
                message the Holy Spirit
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <Button
                onClick={this.handleFormOpen}
                color="purple"
                content="Upload New Message"
              />
              <EventList
                events={events}
                onOpen={this.handleOpen}
                deleteEvent={this.handleDelete}
              />

              {this.state.isOpen && (
                <FormHandler
                  updateEvent={this.handleUpdate}
                  selected={selected}
                  createEvent={this.createNewEvent}
                  handleCancel={this.handleCancel}
                />
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <Wrapper>
                <Dets> This Sunday Sermon</Dets>
                <Details>Study Of The Scripures</Details>
                <DetailCard>Sermon By: Pastor Maina Waiganjo.</DetailCard>
                <DetailCard> Series: Study Of The Scripures.</DetailCard>
                <DetailCard>
                  <FontAwesomeIcon icon={faCalendar} />
                  &nbsp;Date: Sunday 20th April, 2021.
                </DetailCard>
                <p>
                  i. We had earlier noted that the word “equipping” in Eph 4:16
                  comes from a root word (a medical term) that carries the
                  thought of setting of a bone, so as to be perfectly joined
                  together. This equipping is necessary so that the body of
                  Christ is healthy and functions as the builder designed it. a.
                  Paul complements this thought as he uses two body
                  anatomy/medical terms (joints and ligaments) in a comparable
                  verse found in - Col 2:19 and not holding fast to the Head,
                  from whom all the body, nourished and knit together by joints
                  and ligaments, grows with the increase that is from God. This
                  growing of the body with ‘increase that is from God’ is a
                  quality term and not a quantity one. This is demonstrated as
                  individual believers in the body of Christ who avail
                  themselves to be taught, progressively mature and consciously
                  supply to the other believers to whom they are joined.
                </p>
                <MenuCard>
                  <Menu>
                    <Menu.Item>
                      <MenuItem>
                        <FontAwesomeIcon icon={faVideo} /> &nbsp;Video
                      </MenuItem>
                    </Menu.Item>
                    <Menu.Item>
                      <MenuItem>
                        <FontAwesomeIcon icon={faAudioDescription} /> &nbsp;
                        Audio
                      </MenuItem>
                    </Menu.Item>
                    <Menu.Item>
                      <MenuItem>
                        <FontAwesomeIcon icon={faFilePdf} /> &nbsp; PDF
                      </MenuItem>
                    </Menu.Item>
                    <Menu.Item>
                      <MenuItem>
                        <FontAwesomeIcon icon={faFileWord} /> &nbsp;Word
                      </MenuItem>
                    </Menu.Item>
                  </Menu>
                </MenuCard>
              </Wrapper>
            </Grid.Column>
          </Grid>
        </Container>
        <Footer />
      </>
    );
  }
}
export default connect(mapState, actions)(Home);
