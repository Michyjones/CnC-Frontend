import React, { Component } from 'react';
import { Container, Grid, Search, Menu } from 'semantic-ui-react';
import Footer from '../Footer';
import RightNavBar from '../Nav/RightNavBar';
import PaginationMessages from './Pagenation';
import {
  Header,
  Wrapper,
  Details,
  DetailCard,
  GridWrapper,
  Iframe,
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

class Messages extends Component {
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
                src="https://www.youtube.com/embed/930KYTObJto"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                ng-show="showvideo"
              ></iframe>
              </Iframe>
              <SearchBar>
                <Search />
              </SearchBar>
              <Wrapper>
                <Details>Study Of The Scripures</Details>
                <DetailCard> Series: Study Of The Scripures.</DetailCard>
                <DetailCard>Sermon By: Pastor Maina Waiganjo.</DetailCard>
                <DetailCard>
                  <FontAwesomeIcon icon={faCalendar} />
                  &nbsp;Date: Sunday 20th April, 2021.
                </DetailCard>
                <p>
                  Welcome
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
              <Wrapper>
                <Details>Study Of The Scripures</Details>
                <DetailCard> Series: Study Of The Scripures.</DetailCard>
                <DetailCard>Sermon By: Pastor Maina Waiganjo.</DetailCard>
                <DetailCard>
                  <FontAwesomeIcon icon={faCalendar} />
                  &nbsp;Date: Sunday 20th April, 2021.
                </DetailCard>
                <p>
                  Welcome
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
              <Wrapper>
                <Details>Study Of The Scripures</Details>
                <DetailCard> Series: Study Of The Scripures.</DetailCard>
                <DetailCard>Sermon By: Pastor Maina Waiganjo.</DetailCard>
                <DetailCard>
                  <FontAwesomeIcon icon={faCalendar} />
                  &nbsp;Date: Sunday 20th April, 2021.
                </DetailCard>
                <p>
                  Welcome
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
              <Wrapper>
                <Details>Study Of The Scripures</Details>
                <DetailCard> Series: Study Of The Scripures.</DetailCard>
                <DetailCard>Sermon By: Pastor Maina Waiganjo.</DetailCard>
                <DetailCard>
                  <FontAwesomeIcon icon={faCalendar} />
                  &nbsp;Date: Sunday 20th April, 2021.
                </DetailCard>
                <p>
                  Welcome
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
              <Wrapper>
                <Details>Study Of The Scripures</Details>
                <DetailCard> Series: Study Of The Scripures.</DetailCard>
                <DetailCard>Sermon By: Pastor Maina Waiganjo.</DetailCard>
                <DetailCard>
                  <FontAwesomeIcon icon={faCalendar} />
                  &nbsp;Date: Sunday 20th April, 2021.
                </DetailCard>
                <p>
                  Welcome
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
