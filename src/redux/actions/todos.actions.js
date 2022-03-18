
import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../types/todo.types' 


export const addTodo = text => ({
  type: ADD_TODO,
  complete: false,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});





