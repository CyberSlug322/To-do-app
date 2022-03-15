import React from "react";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions/todos.actions";
import { filterTodosSelector, selectRequestIsFetching } from "../redux/selectors/selectors"
import Loading from "../components/Loading";
import { test } from "../redux/selectors/selectors";

const TodoList = ({ todos, toggleTodo, isFetching }) => {
  //if (isFetching) return (<Loading/>)
  return (
    <ul>
      {todos != null &&
        todos.map(todo => (
          <li key={todo.id}>
          <Todo {...todo} onClick={() => toggleTodo(todo.id)} />
          </li>
        ))
      }
    </ul>
  ) 
};

const mapStateToProps = state => ({
  todos: filterTodosSelector(state),
  isFetching: test(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
