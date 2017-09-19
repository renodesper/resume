import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.section`
  min-height: 100%;
`;

const SharedCSS = css`
  font-family: 'Roboto Slab', serif;
  font-size: 15px;
  margin-bottom: 10px;
  border-radius: 2px;
  border: 2px solid;
  border-color: #494949;
  outline: none;
`;

const Input = styled.input`
  ${SharedCSS}
  color: #494949;
  padding-left: 10px;
  width: 552px;
  height: 30px;

  &:first-child {
    margin-top: 10px;
  }
`;

const TextArea = styled.textarea`
  ${SharedCSS}
  color: #494949;
  padding-left: 10px;
  width: 550px;
  height: 105px;
  resize: none;
`;

const Button = styled.input`
  ${SharedCSS}
  background-color: #f0f0f0;
  color: #494949;
  width: 566px;
  height: 50px;

  background-color: #f0f0f0;
  color: #494949;
  transition: all 300ms;
  &:hover {
    background-color: #494949;
    color: #f0f0f0;
    transition: all 300ms;
  }
`;

const Contact = () => (
  <Container id="contact">
    <h3>Contact</h3>
    <hr />

    <form>
      <Input class="input_text" type="email" tabindex="0" placeholder="Email" /><br />
      <Input class="input_text" type="text" tabindex="0" placeholder="Name" /><br />
      <TextArea class="input_text" tabindex="0" placeholder="Message" /><br />
      <Button type="submit" />
    </form>
  </Container>
);
export default Contact;
