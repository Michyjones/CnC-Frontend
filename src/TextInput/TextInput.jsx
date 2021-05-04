import React from "react";
import { Wrapper, IconContainer, Input } from "./TextInput.styled";

const TextInput = ({ icon: Icon, ...props }) => {
  return (
    <div>
      <Wrapper>
        {Icon && (
          <IconContainer>
            <Icon />
          </IconContainer>
        )}
        <Input {...props} ref={props.register} />
      </Wrapper>
    </div>
  );
};

export default TextInput;
