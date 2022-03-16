import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from '../constants'

const initialState = {
    isFetching: false,
    data: [],
    errorMessage: []
};

const todoRequestReducer = (state = initialState, action) => {
    if (action.type === FETCH_REQUEST) state.isFetching = true
    if (action.type === FETCH_SUCCESS) {
        state.data = [...state.data, action.data]
        state.isFetching = false
    }
    if (action.type === FETCH_ERROR) {
        state.errorMessage = [...state.errorMessage, action.errorMessage]
        state.isFetching = false
    }
    return state
  };
  
export default todoRequestReducer
  
  