import React, { Component } from 'react';
import {
  Container,
  Grid,
  Image,
  Menu,
  Search,
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
  SearchBar,
  Text,
  Space,
} from './home.sytled';

import Footer from './Footer';
import FormHandler from './FormHandler';
import EventList from './EventList';

const eventsDashboard = [
  {
    id: '1',
    weeklySermon: 'Study Of The Scripures',
    title: 'Study Of The Scripures Part 5',
    date: '2018-03-27',
    series: 'Study Of The Scripures ',
    sermonBy: 'Pastor Maina',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    audio: 'Holy are you Lord',
    video: 'Video link',
  },
];

class Home extends Component {
  state = {
    events: eventsDashboard,
    isOpen: false,
    selected: null,
  };
  handleFormOpen = () => {
    this.setState({
      selected: null,
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
    this.setState({
      events: this.state.events.map((event) => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else return event;
      }),
      isOpen: false,
      selected: null,
    });
  };
  createNewEvent = (newEvent) => {
    newEvent.id = cuid();
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false,
    });
  };
  handleDelete = (eventId) => () => {
    const updatedEvents = this.state.events.filter((e) => e.id !== eventId);
    this.setState({
      events: updatedEvents,
    });
  };
  render() {
    const { selected } = this.state;
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
              <SearchBar>
                <Search />
              </SearchBar>
              <EventList
                events={this.state.events}
                onOpen={this.handleOpen}
                deleteEvent={this.handleDelete}
              />
              <Button
                onClick={this.handleFormOpen}
                color="purple"
                content="Upload New Message"
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
                  Welcome to Cornerstone Christian Fellowship in Jacksonville,
                  Florida. Our aim is to teach and study the Word of God,
                  precept upon precept, line upon line, here a little and there
                  a little; comparing spiritual things with spiritual, beginning
                  at Moses, so that every Christian may be complete and
                  thoroughly prepared for every good work in anticipation of
                  Christ’s Judgment Seat. Please look at our website, listen to
                  a sermon or two and ask God if this is the place He would have
                  you come to grow in the Word. We would love to have you visit
                  anytime.
                  <p></p>
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
export default Home;
