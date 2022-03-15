import {
    FILTER_TODO,
    SHOW_ACTIVE, 
    SHOW_ALL, 
    SHOW_COMPLETE,
  } from '../constants' 


  export const filter = filter => ({
    type: FILTER_TODO,
    filter
  });

  export const typeFilter = {
    SHOW_COMPLETE: SHOW_COMPLETE,
    SHOW_ACTIVE: SHOW_ACTIVE,
    SHOW_ALL: SHOW_ALL
  };