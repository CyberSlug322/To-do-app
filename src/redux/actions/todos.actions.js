
import {
  TODO_ADD_TODO,
  TODO_TOGGLE_TODO,
} from '../constants' 


export const addTodo = text => ({
  type: TODO_ADD_TODO,
  complete: false,
  text
});

export const toggleTodo = id => ({
  type: TODO_TOGGLE_TODO,
  id
});





