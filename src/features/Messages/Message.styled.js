import styled from "styled-components";
import breakpoints from "../GetInTouch/breakpoints";

export const Video = styled.iframe`
  display: flex;
  text-align: left;
  justify-content: left;
  height: 500px;
  width: 650px;
  src: "https://www.youtube.com/embed/xSkKnIy77Jg";
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
  ${breakpoints("display", [{ 768: "none" }])};
`;
