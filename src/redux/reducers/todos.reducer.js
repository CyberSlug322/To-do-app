import { ADD_TODO, TOGGLE_TODO, FETCH_TODO, } from '../constants'

const initialState = []

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TODO:
        return [
          ...state,
          {
            id: action.id,
            complete: action.complete,
            text: action.text
          }
        ]
      case ADD_TODO:
        return [
          ...state, 
          {
            id: action.id,
            complete: action.complete,
            text: action.text
          }
        ];
      case TOGGLE_TODO:
        return state.map(
          todo =>
            todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
        );
      default:
        return state;
    }
  };

  export default todosReducer