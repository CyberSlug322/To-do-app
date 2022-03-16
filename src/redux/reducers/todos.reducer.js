import { ADD_TODO, TOGGLE_TODO, FETCH_NEW_TODO_ITEM_SUCCESS} from '../action.constants'


const initialState = {nextTodoId: 0,todosArr: []}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NEW_TODO_ITEM_SUCCESS:
        return {
          nextTodoId: ++state.nextTodoId,
          todosArr:[
          ...state.todosArr,
          action.data
        ]}
      case ADD_TODO:
        return {
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