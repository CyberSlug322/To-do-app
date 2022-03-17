import { ADD_TODO, TOGGLE_TODO, FETCH_NEW_TODO_ITEM_SUCCESS,
  FETCH_NEW_TODO_ITEM_ERROR, FETCH_NEW_TODO_ITEM_REQUEST, } from '../action.constants'


const initialState = {nextTodoId: 0,todosArr: [],isFetching: false, data: [], errorMessage: []}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NEW_TODO_ITEM_REQUEST:
        return {
          ...state,
          isFetching: true
        }
      case FETCH_NEW_TODO_ITEM_ERROR:
        return {
          ...state,
          errorMessage: [...state.errorMessage, action.errorMessage],
          isFetching: false
        }
      case FETCH_NEW_TODO_ITEM_SUCCESS:
        return {
          ...state,
          nextTodoId: ++state.nextTodoId,
          isFetching: false,
          todosArr:[
          ...state.todosArr,
          action.data
        ]}
      case ADD_TODO:
        return {
          ...state,
          nextTodoId: ++state.nextTodoId,
          todosArr:[
          ...state.todosArr, 
          {
            id: state.nextTodoId,
            complete: action.complete,
            text: action.text
          }
        ]}
      case TOGGLE_TODO:
        return {
          ...state,
        nextTodoId: state.nextTodoId,  
        todosArr:state.todosArr.map(
          todo =>
            todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
        )}

      default:
        return state;
    }
  };

  export default todosReducer