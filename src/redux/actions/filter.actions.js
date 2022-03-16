import { FILTER_TODO } from '../action.constants' 


  export const enableFilter = filter => ({
    type: FILTER_TODO,
    filter
  });
