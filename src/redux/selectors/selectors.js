import { SHOW_COMPLETE, SHOW_ACTIVE } from "../constants";

export const filterTodosSelector = (state) => {
    switch (state.filterTodo) {
      case SHOW_COMPLETE:
        return state.todos.filter(todo => todo.complete === true);
      case SHOW_ACTIVE:
        return state.todos.filter(todo => todo.complete === false);
      default:
        return state.todos;
    }
  };