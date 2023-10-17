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

export const TaskDay = ({value, action}) => {
  return (
    <FormTakDay>
      <input type="text" placeholder="type your task day" value={value}/>
      <button onClick={action}>Add Task</button>
    </FormTakDay>
  );
};
