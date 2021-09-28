import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  opacity: 1;
  overflow: hidden;
  display: flex;
  padding: 14px 18px;
  margin-bottom: 24px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 25px;
  font-size: 28px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  font: normal normal normal 17px/20px Montserrat;
  letter-spacing: 0px;
  &:focus {
    outline: none;
  }
`;
