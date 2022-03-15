import { FILTER_TODO, SHOW_ALL } from '../constants'

const initialState = SHOW_ALL;

const todoFilterReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_TODO:
        return action.filter;
      default:
        return state;
    }
  };
  
export default todoFilterReducer
  
  