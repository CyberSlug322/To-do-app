import {
    API_FETCH_ERROR,
    API_FETCH_REQUEST,
    API_FETCH_SUCCESS
  } from '../constants' 
  
  export const fetchTodoRequest = () => ({
    type: API_FETCH_REQUEST,
    isFetching: true
  })
  
  export const fetchTodoSuccess = (data) => ({
    type: API_FETCH_SUCCESS,
    isFetching: false,
    data
  })
  
  export const fetchTodoError = (errorMessage) => ({
    type: API_FETCH_ERROR,
    isFetching: false,
    errorMessage
  })