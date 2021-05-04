import React from "react";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

const SpinnerBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PageLoader = () => {
  return (
    <SpinnerBox>
      <PulseLoader size={30} margin={10} color={"#bf00ff"} />
    </SpinnerBox>
  );
};

export default PageLoader;
