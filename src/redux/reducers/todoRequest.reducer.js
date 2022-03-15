import { MY_FETCH_ERROR, MY_FETCH_REQUEST, MY_FETCH_SUCCESS } from '../constants'

const initialState = {
    isFetching: false,
    data: [],
    errorMessage: []
};

const todoRequestReducer = (state = initialState, action) => {
    if (action.type === MY_FETCH_REQUEST) state.isFetching = true
    if (action.type === MY_FETCH_SUCCESS) {
        state.data = [...state.data, action.data]
        state.isFetching = false
    }
    if (action.type === MY_FETCH_ERROR) {
        state.errorMessage = [...state.errorMessage, action.errorMessage]
        state.isFetching = false
    }
    return state
  };
  
export default todoRequestReducer
  
  