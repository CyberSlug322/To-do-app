import { ADD_TODO, TOGGLE_TODO, API_FETCH_REQUEST} from '../constants'


const initialState = {nextTodoId: 0,todosArr: []}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case API_FETCH_REQUEST:
        return {
          nextTodoId: ++state.nextTodoId,
          todosArr:[
          ...state.todosArr,
          {
            id: state.nextTodoId,
            complete: false,
            text: "action.text"
          }
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