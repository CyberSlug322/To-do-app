import { createSelector } from '@reduxjs/toolkit'
import { SHOW_COMPLETE, SHOW_ACTIVE } from "../constants";

export const selectFilterTodo = (state) => state.filterTodo
export const selectTodos = (state) => state.todos.todosArr
export const selectRequestTodos = (state) => state.requestTodos

export const selectRequestIsFetching = createSelector(selectRequestTodos, (requestTodos) => requestTodos.isFetching)

export const filterTodosSelector = createSelector(selectTodos, selectFilterTodo, (todos, filterTodo) => {
  console.log(todos)
    switch (filterTodo) {   
      case SHOW_COMPLETE:
        console.log("complete")
        return todos.filter(todo => todo.complete === true);
      case SHOW_ACTIVE:
        console.log("active")
        return todos.filter(todo => todo.complete === false);
      default:
        return todos;
    }
  })