import React, { useState } from "react";

const ListItem = ({ key, data }) => {
  const [counter, setCount] = useState(0);

  function handleCounter() {
    let current = counter+1
    setCount((c) => current)
  }
  return (
    <div>
      <li key={key}>{data.title}</li>
      <button onClick={() => changeStatus(data)}>next</button>
      <span>{counter}</span>
      <button onClick={handleCounter}>counter</button>
    </div>
  );
};

export default ListItem;
