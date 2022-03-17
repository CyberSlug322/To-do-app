import { createSelector } from '@reduxjs/toolkit'
import { Filter } from "../../constants/constants";

export const selectFilterTodo = (state) => state.filterTodo
export const selectTodosArray = (state) => state.todos.todosArr
export const selectTodos = (state) => state.todos

export const selectRequestIsFetching = createSelector(selectTodos, (todos) => todos.isFetching)

export const filterTodosSelector = createSelector(selectTodosArray, selectFilterTodo, (todos, filterTodo) => {
    switch (filterTodo) {   
      case Filter.SHOW_COMPLETE:
        console.log("complete")
        return todos.filter(todo => todo.complete === true);
      case Filter.SHOW_ACTIVE:
        console.log("active")
        return todos.filter(todo => todo.complete === false);
      default:
        return todos;
    }
  })