import { FILTER_TODO } from '../types/filter.types' 


  export const enableFilter = filter => ({
    type: FILTER_TODO,
    filter
  });
