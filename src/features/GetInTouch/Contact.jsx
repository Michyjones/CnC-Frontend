import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import TextInput from "../../TextInput/TextInput";

import {
  FormContainer,
  FormContent,
  FieldsContainer,
  MessageContainer,
  MessageInput,
  ButtonContainer,
  Button,
} from "./GetInTouch.styled";

const ContactUs = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const {
      firstName,
      lastName,
      subject,
      phone,
      email,
      message,
    } = e.target.elements;
    const details = {
      firstName: firstName.value,
      lastName: lastName.value,
      subject: subject.value,
      phone: phone.value,
      email: email.value,
      message: message.value,
    };
    const response = await fetch("http://localhost:5004/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    const responseMessage =
      response.status === 200 ? (
        <Redirect to="/feedback" />
      ) : (
        "Something went wrong"
      );
    setStatus([false, responseMessage]);
    setInterval(() => {
      setStatus([false, "Submit"]);
    }, 3000);
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormContent>
        <FieldsContainer>
          <TextInput
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <TextInput
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <TextInput type="email" name="email" placeholder="Email" required />
          <TextInput type="phone" name="phone" placeholder="Phone" required />
        </FieldsContainer>
        <MessageContainer>
          <TextInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
          <MessageInput placeholder="Message" type="message" name="message" />
        </MessageContainer>
      </FormContent>
      <ButtonContainer>
        <Button type="submit"> {status}</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default ContactUs;
