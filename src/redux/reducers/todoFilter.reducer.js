import { Filter } from '../../constants/constants'
import { FILTER_TODO } from '../types/filter.types'

const initialState = Filter.SHOW_ALL;

const todoFilterReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_TODO:
        return action.filter;
      default:
        return state;
    }
  };
  
export default todoFilterReducer
  
