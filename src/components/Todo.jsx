import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <li>
      <input type="checkbox" onChange={onClick} checked={complete} />
      {text}
    </li>
  );
};

export default Todo;
