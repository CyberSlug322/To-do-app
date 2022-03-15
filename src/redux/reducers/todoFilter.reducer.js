import { FILTER_FILTER_TODO, FILTER_SHOW_ALL } from '../constants'

const initialState = FILTER_SHOW_ALL;

const todoFilterReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_FILTER_TODO:
        return action.filter;
      default:
        return state;
    }
  };
  
export default todoFilterReducer
  
  