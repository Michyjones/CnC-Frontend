import styled from 'styled-components';
import img from '../assests/mountain.jpg';
import breakpoints from './GetInTouch/breakpoints';

export const Body = styled.div`
  font-size: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 1px;
  text-align: left;
  justify-content: flex-start;
  transform: translate(30%, 0%);
  top: 300px;
  color: white;
  width: 22%;
  position: absolute;
  font: normal normal normal 30px/30px Montserrat;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px 0 20px 10px;
  margin: 60px 0;
  @media screen and (max-width: 1200px) {
    font-size: 2.4rem;
    margin: 40px 0;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    margin: 20px 0;
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;
export const Space = styled.span`
  padding-top: 10px;
`;
export const Header = styled.div`
  text-align: center;
  justify-content: center;
  color: #bf00ff;
  margin-top: 20px;
  margin-bottom: 30px;
  font: normal normal normal 35px/35px Montserrat;
`;
export const ImageContainer = styled.image`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  width: 500px;
`;

export const Details = styled.div`
  text-align: left;
  justify-content: left;
  margin-top: 20px;
  margin-bottom: 30px;
  font: normal normal normal 30px/30px Montserrat;
`;
export const Dets = styled.div`
  text-align: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
  font: normal normal normal 35px/35px Montserrat;
`;

export const DetailCard = styled.div`
  text-align: left;
  justify-content: left;
  margin-top: 25px;
  margin-bottom: 20px;
  font: normal normal normal 20px/20px Montserrat;
`;
export const Wrapper = styled.div`
  background: #f5f7fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #00000029;
  border-radius: 30px;
  min-height: 550px;
  padding-top: 30px;
  padding-left: 30px;
`;

export const MenuCard = styled.div`
  text-align: left;
  justify-content: left;
  display: flex;
  font: normal normal normal 20px/20px Montserrat;
`;

export const MenuItem = styled.div`
  display: flex;
  font-size: 1rem;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  cursor: pointer;
  ${breakpoints('display', [{ 500: 'none' }])};
  &:hover {
    color: #bf00ff;
    padding-left: 3em;

    > a {
      color: #fff;
    }
  }
`;

export const SearchBars = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  color: purple;
  border: 1px solid;
  border-radius: 5px;
  font: normal normal normal 20px/20px Montserrat;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

export const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #bf00ff;
  }
`;
