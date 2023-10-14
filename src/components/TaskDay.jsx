import React from "react";
import styled from "styled-components";

const FormTakDay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: .2em;

  input {
    width: 70%;
  }
  button {
    width: 25%;
  }
`;

export const TaskDay = () => {
  return (
    <FormTakDay>
      <input type="text" placeholder="type your task day" />
      <button>Add Task</button>
    </FormTakDay>
  );
};
