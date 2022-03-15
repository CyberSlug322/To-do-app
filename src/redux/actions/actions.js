import {
  ADD_TODO,
  TOGGLE_TODO,
  FILTER_TODO,
  FETCH_TODO,
  SHOW_ACTIVE, 
  SHOW_ALL, 
  SHOW_COMPLETE,
  MY_FETCH_ERROR,
  MY_FETCH_REQUEST,
  MY_FETCH_SUCCESS
} from '../constants'

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  complete: false,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const filter = filter => ({
  type: FILTER_TODO,
  filter
});

export const typeFilter = {
  SHOW_COMPLETE: SHOW_COMPLETE,
  SHOW_ACTIVE: SHOW_ACTIVE,
  SHOW_ALL: SHOW_ALL
};

export const fetchTodo = () => ({
  type: FETCH_TODO,
  id: nextTodoId++,
  complete: false,
  text: "toSo task from fake api"
})

export const fetchTodoRequest = () => ({
  type: MY_FETCH_REQUEST,
  isFetching: true
})

export const fetchTodoSuccess = (data) => ({
  type: MY_FETCH_SUCCESS,
  isFetching: false,
  data
})

export const fetchTodoError = (errorMessage) => ({
  type: MY_FETCH_ERROR,
  isFetching: false,
  errorMessage
})