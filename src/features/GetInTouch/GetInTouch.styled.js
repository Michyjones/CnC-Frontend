import styled from "styled-components";

import breakpoints from "./breakpoints";
import img from "../../assests/CnCLG.jpg";
import thanks from "../../assests/Thanks.png";

export const Container = styled.div`
  margin: 100px 50px;
  background: #f5f7fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #00000029;
  border-radius: 30px;
  min-height: 600px;
  display: flex;
`;

export const Side = styled.div`
  display: flex;
  width: 40%;
  border-right: 1px solid #ddd;
  box-shadow: 0px 3px 6px #00000029;
  ${breakpoints("display", [{ 768: "none" }])};
`;

export const Content = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 20px #00000029;
  border-right: 1px solid #ddd;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  ${breakpoints("width", [{ 768: "100%" }])};
`;

export const Header = styled.div`
  display: flex;
  text-align: left;
  font: normal normal bold 56px/68px Montserrat;
  letter-spacing: 0px;
  color: #bf00ff;
  padding: 0 33px;
`;

export const MenuLinkWrapper = styled.div`
  display: flex;
  margin: 0 0 0 13px;
  flex: 1;
  &:first-of-type {
    justify-content: flex-end;
    margin: 0 13px 0 0;
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  letter-spacing: 0px;
  justify-content: center;
  align-items: center;
  margin: 20px 13px 35px 0;
  a {
    text-decoration: none;
    font: normal normal normal 17px/20px Montserrat;
    letter-spacing: 0px;
    color: #000000;
  }
`;

export const MenuLink = styled.div`
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid ${({ active }) => (active ? "#bf00ff" : "#D1D1D1")};
  border-radius: 8px;
  width: 185px;
  height: 88px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  flex-direction: column;
`;
export const FormSection = styled.div`
  display: flex;
  letter-spacing: 0px;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;
export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 13px;
  flex: 1;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 13px;
`;

export const MessageInput = styled.textarea`
  display: flex;
  flex: 1;
  background: #f4f6fb 0% 0% no-repeat padding-box;
  border-radius: 8px;
  font: normal normal normal 17px/20px Montserrat;
  letter-spacing: 0px;
  padding: 20px 22px;
  border: none;
  resize: none;
  height: 100%;
  margin-bottom: 24px;
  box-sizing: border-box;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #bf00ff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background: #bf00ff;
  border-radius: 3px;
  border: none;
  color: white;
  border-radius: 8px;
  width: 206px;
  height: 63px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const ImageContainer = styled.image`
  background-image: url(${img});
  background-size: 68% 100%;
  width: 800px;
  height: 600px;
`;
export const ImageWrapper = styled.div`
  display: flex;
`;

export const MessageCard = styled.div`
  padding: 200px 200px 500px 200px;
  width: 724px;
  height: 400px;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

export const MessageCardText = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 10px;
  width: 660px;
  height: 350px;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 50px;
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

export const PurpleButton = styled.div`
  display: flex;
  background: #bf00ff 0% 0% no-repeat padding-box;
  letter-spacing: 0px;
  color: #f9f9fb;
  border-radius: 8px;
  top: 225px;
  width: 95px;
  height: 52px;
  margin: 10px 0 0 485px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ButtonIcon = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  background-image: url(${thanks});
  font-size: 50px;
  color: #bf00ff;
  height: 100px;
  width: 100px;
  background-size: cover;
`;
export const Success = styled.div`
  a {
    text-decoration: none;
    font: normal normal normal 17px/20px Montserrat;
    letter-spacing: 0px;
    color: #000000;
  }
`;
export const Href = styled.div`
  padding: 20px;
  width: 80%;
  color: #c9c9c9;
`;
export const MessageText = styled.div`
  text-align: left;
  font: normal normal normal 20px/24px Montserrat;
  letter-spacing: 0px;
  color: #272727;
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
