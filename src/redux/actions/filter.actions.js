import {
    FILTER_FILTER_TODO,
    FILTER_SHOW_ACTIVE, 
    FILTER_SHOW_ALL, 
    FILTER_SHOW_COMPLETE,
  } from '../constants' 


  export const filter = filter => ({
    type: FILTER_FILTER_TODO,
    filter
  });

  export const typeFilter = {
    FILTER_SHOW_COMPLETE: FILTER_SHOW_COMPLETE,
    FILTER_SHOW_ACTIVE: FILTER_SHOW_ACTIVE,
    FILTER_SHOW_ALL: FILTER_SHOW_ALL
  };