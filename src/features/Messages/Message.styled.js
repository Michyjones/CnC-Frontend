import styled from 'styled-components';

export const Video = styled.iframe`
  display: flex;
  text-align: left;
  justify-content: left;
  height: 500px;
  width: 650px;
`;

export const Header = styled.div`
  text-align: left;
  justify-content: left;
  color: #bf00ff;
  margin-top: 20px;
  margin-bottom: 10px;
  font: normal normal normal 35px/35px Montserrat;
`;
export const Wrapper = styled.div`
  background: #f5f7fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #00000029;
  min-height: 250px;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  margin-bottom: 20px;
`;
export const Details = styled.div`
  text-align: left;
  justify-content: left;
  margin-top: 10px;
  margin-bottom: 20px;
  font: normal normal normal 20px/20px Montserrat;
`;

export const DetailCard = styled.div`
  text-align: left;
  justify-content: left;
  margin-top: 10px;
  margin-bottom: 10px;
  font: normal normal normal 15px/15px Montserrat;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 20px;
`;

export const Iframe = styled.div`
  display: flex;
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 2.4rem;
    margin: 0px 0;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1rem;
    margin: 20px 0;
  }
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const Youtube = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    font-size: 2.4rem;
    margin: 0px 0;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1rem;
    margin: 20px 0;
  }
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const FrameMargin = styled.div`
  padding-top: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    font-size: 2.4rem;
    margin: 0px 0;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1rem;
    margin: 20px 0;
  }
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
x`;

export const FramePadding = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
x`;

export const VideoFrame = styled.div`
  padding: 2rem;
`;
