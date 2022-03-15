import React from "react";
import { addTodo } from "../redux/actions/actions";
import { connect } from "react-redux";
import { useState } from "react";

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState('')

  const onClick = () => {
    if (input === "") return
      dispatch(addTodo(input));
      setInput('');
  };
  return (
    <>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" onClick={onClick}>
        Add Todo
      </button>
    </>
  );
};

export default connect()(AddTodo);
