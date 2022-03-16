import {
    FETCH_ERROR,
    FETCH_REQUEST,
    FETCH_SUCCESS
  } from '../constants' 
  
  export const fetchTodoRequest = () => ({
    type: FETCH_REQUEST,
    isFetching: true
  })
  
  export const fetchTodoSuccess = (data) => ({
    type: FETCH_SUCCESS,
    isFetching: false,
    data
  })
  
  export const fetchTodoError = (errorMessage) => ({
    type: FETCH_ERROR,
    isFetching: false,
    errorMessage
  })