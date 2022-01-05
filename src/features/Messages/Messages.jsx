import React, { Component } from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';
import debounce from 'lodash.debounce';
import SearchBar from '../Search/SearchBar';
import VideoDetail from '../Search/VideoDetail';
import VideoList from '../Search/VideoList';
import YTSearch from 'youtube-api-search';
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
const channelId = 'UCmDajfl4tCiKq7oiF-6fHog';
const API_KEY = 'AIzaSyBv-MuoxYFhoWlAr4wwi_6s3NYgRpTnDU8';
const result = 10;

const googleUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`;

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultyt: [],
      titles: [],
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('The Cross and Crowns Assembly');
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
  videoSearch(term) {
    YTSearch(
      {
        key: API_KEY,
        term: term,
      },
      (videos) => {
        this.setState({ videos: videos, selectedVideo: videos[0] });
      }
    );
  }

  render() {
    const videoSearch = debounce((term) => {
      this.videoSearch(term);
    }, 300);
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
                  src="https://www.youtube.com/embed/live_stream?channel=UCmDajfl4tCiKq7oiF-6fHog&autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ng-show="showvideo"
                ></iframe>
              </Iframe>

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

              <PaginationMessages />
            </Grid.Column>
            <GridWrapper>
              <Grid.Column width={6}>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={(selectedVideo) => {
                    this.setState({ selectedVideo });
                  }}
                />
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
