import React, { Component } from 'react';
import { Container, Grid, Search, Menu, Button } from 'semantic-ui-react';
import Footer from '../Footer';
import PaginationMessages from './Pagenation';
import {
  Header,
  Wrapper,
  Details,
  DetailCard,
  GridWrapper,
  Iframe,
  FrameMargin,
  FramePadding,
} from './Message.styled';
import { SearchBar, MenuCard, MenuItem } from '../home.sytled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVideo,
  faAudioDescription,
  faFilePdf,
  faFileWord,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

const channelId = 'xxxxxxxxxx';
const API_KEY = 'xxxxxxxxxxx';
const result = 10;

const googleUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`;

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultyt: [],
      titles: [],
    };
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    fetch(googleUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        const titles = responseJson.items.map((item) => item.snippet.title);
        const resultyt = responseJson.items.map(
          (obj) => 'https://www.youtube.com/embed/' + obj.id.videoId
        );
        this.setState({ resultyt });
        this.setState({ titles });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <Container className="main">
          <Grid>
            <Grid.Column width={10}>
              <Header> JOIN US ON SUNDAY @10:00 AM EAT. </Header>
              <Iframe>
                <iframe
                  width="670"
                  height="400"
                  src="https://www.youtube.com/embed/live_stream?channel=xxxxxxxxxxxx&autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ng-show="showvideo"
                ></iframe>
              </Iframe>
              <SearchBar>
                <Search />
              </SearchBar>

                <Button
                  onClick={this.clicked}
                  color="purple"
                  content="Get All Messages"
                />
                <FrameMargin>
                    {this.state.resultyt.map((link, i) => {
                      const frame = (
                        <div key={i} className="youtube">
                          <FramePadding>
                            <iframe
                              width="560"
                              height="315"
                              src={link}
                              frameBorder="0"
                              allowFullScreen
                            ></iframe>
                          </FramePadding>
                        </div>
                      );
                      return frame;
                    })}
                    {this.frame}
                </FrameMargin>

              <Wrapper>
                <Details>Study Of The Scripures</Details>
                <DetailCard> Series: Study Of The Scripures.</DetailCard>
                <DetailCard>Sermon By: Pastor Maina Waiganjo.</DetailCard>
                <DetailCard>
                  <FontAwesomeIcon icon={faCalendar} />
                  &nbsp;Date: Sunday 20th April, 2021.
                </DetailCard>
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

              <PaginationMessages />
            </Grid.Column>
            <GridWrapper>
              <Grid.Column width={6}>
                <p>
                  The Holy Spirit is Speaking.
                  <br /> i. From our head scripture we notice that the Holy
                  Spirit is speaking to the churches “He who has an ear, let him
                  hear what the Spirit says to the churches”.
                  <br /> ii. There are questions here that we need answers for.
                  <br /> a. WHO is the source of the message the Holy Spirit is
                  speaking?
                  <br />
                  b. WHERE is the Holy Spirit residing?
                  <br /> c. WHAT is the context of what the Holy Spirit is
                  saying?
                  <br />
                  d. WHAT message is the Holy Spirit announcing to the churches?
                  <br />
                  e. HOW is the Holy Spirit speaking? 2. WHO is the source of
                  the message the Holy Spirit
                </p>
              </Grid.Column>
            </GridWrapper>
          </Grid>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Messages;
