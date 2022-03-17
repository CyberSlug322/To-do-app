import React from "react";
import { addTodo } from "../redux/actions/todos.actions";
import { connect } from "react-redux";
import { useState } from "react";

const AddTodo = ({dispatchTodo}) => {
  const [input, setInput] = useState('')

  const createTodo = () => {
    if (input === "") return
      dispatchTodo(input);
      setInput("");
  };
  return (
    <>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" onClick={createTodo}>
        Add Todo
      </button>
    </>
  );
};

const mapStateToProps = () => ({
  
});

const mapDispatchToProps = dispatch => ({
  dispatchTodo: input => dispatch(addTodo(input))
});

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);
