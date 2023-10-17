import React, { useRef, useState } from "react";
import styled from "styled-components";
import uuid from 'react-uuid';

const FormTakDay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.2em;

  input {
    width: 70%;
  }
  button {
    width: 30%;
  }
`;

export const TaskDay = ({handleAddTask}) => {
  
  const inputRef = useRef();

  const getInputValue = () => {
    const input = inputRef.current?.value;
    return input;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const data = getInputValue()
    handleAddTask({id: uuid(), title: data, status: 'to-do'})
    console.log(data)
  }

  return (
    <FormTakDay>
      <input type="text" placeholder="type your task day" ref={inputRef} />
      <button onClick={handleSubmit}>Add Task</button>
    </FormTakDay>
  );
};
