import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <div>
      <input type="checkbox" onChange={onClick} checked={complete} />
      {text}
    </div>
  );
};

export default Todo;
