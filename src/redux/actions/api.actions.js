import {
    FETCH_NEW_TODO_ITEM_ERROR,
    FETCH_NEW_TODO_ITEM_REQUEST,
    FETCH_NEW_TODO_ITEM_SUCCESS
  } from '../types/api.types' 
  
  export const fetchTodoRequest = () => ({
    type: FETCH_NEW_TODO_ITEM_REQUEST,
  })
  
  export const fetchTodoSuccess = (data) => ({
    type: FETCH_NEW_TODO_ITEM_SUCCESS,
    data
  })
  
  export const fetchTodoError = (errorMessage) => ({
    type: FETCH_NEW_TODO_ITEM_ERROR,
    errorMessage
  })