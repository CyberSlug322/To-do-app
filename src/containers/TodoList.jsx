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

const mapStateToProps = state => ({
  todos: filterTodosSelector(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
