import { createSelector } from '@reduxjs/toolkit'
import { SHOW_COMPLETE, SHOW_ACTIVE } from "../constants";

export const selectFilterTodo = (state) => state.filterTodo
export const selectTodos = (state) => state.todos.todosArr
export const selectRequestTodos = (state) => state.requestTodos

export const test = (state) => state.requestTodos.isFetching
export const selectRequestIsFetching = createSelector(selectRequestTodos, (reqTodos) => reqTodos.isFetching)

export const filterTodosSelector = createSelector(selectTodos, selectFilterTodo, (todos, filterTodo) => {
    switch (filterTodo) {
      
      case SHOW_COMPLETE:
        return todos.filter(todo => todo.complete === true);
      case SHOW_ACTIVE:
        return todos.filter(todo => todo.complete === false);
      default:
        return todos;
    }
  })