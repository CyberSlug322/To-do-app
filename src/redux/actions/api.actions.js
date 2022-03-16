import {
    FETCH_NEW_TODO_ITEM_ERROR,
    FETCH_NEW_TODO_ITEM_REQUEST,
    FETCH_NEW_TODO_ITEM_SUCCESS
  } from '../constants' 
  
  export const fetchTodoRequest = () => ({
    type: FETCH_NEW_TODO_ITEM_REQUEST,
    isFetching: true
  })
  
  export const fetchTodoSuccess = (data) => ({
    type: FETCH_NEW_TODO_ITEM_SUCCESS,
    isFetching: false,
    data
  })
  
  export const fetchTodoError = (errorMessage) => ({
    type: FETCH_NEW_TODO_ITEM_ERROR,
    isFetching: false,
    errorMessage
  })