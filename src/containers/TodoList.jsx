import React from "react";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions/actions";
import { filterTodosSelector} from "../redux/selectors/selectors"

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos != null &&
        todos.map(todo => (
          <li key={todo.id}>
          <Todo  {...todo} onClick={() => toggleTodo(todo.id)} />
          </li>
        ))}
    </ul>
  );
};

const filterTodos = (state) => {
  switch (state.filterTodo) {
    case "SHOW_COMPLETE":
      return state.todos.filter(todo => todo.complete === true);
    case "SHOW_ACTIVE":
      return state.todos.filter(todo => todo.complete === false);
    default:
      return state.todos;
  }
};

const mapStateToProps = state => ({
  todos: filterTodos(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
