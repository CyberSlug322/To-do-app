import { FETCH_NEW_TODO_ITEM_ERROR, FETCH_NEW_TODO_ITEM_REQUEST, FETCH_NEW_TODO_ITEM_SUCCESS } from '../constants'

const initialState = {
    isFetching: false,
    data: [],
    errorMessage: []
};

const todoRequestReducer = (state = initialState, action) => {
    if (action.type === FETCH_NEW_TODO_ITEM_REQUEST) state.isFetching = true
    if (action.type === FETCH_NEW_TODO_ITEM_SUCCESS) {
        state.data = [...state.data, action.data]
        state.isFetching = false
    }
    if (action.type === FETCH_NEW_TODO_ITEM_ERROR) {
        state.errorMessage = [...state.errorMessage, action.errorMessage]
        state.isFetching = false
    }
    return state
  };
  
export default todoRequestReducer
  
  