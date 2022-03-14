
export const todos = (state = [], action) => {
    switch (action.type) {
      case "FETCH_TODO":
        console.log(action)
        return [
          ...state,
          {
            id: action.id,
            complete: action.complete,
            text: action.text
          }
        ]
      case "ADD_TODO":
        console.log(action)
        return [
          ...state, 
          {
            id: action.id,
            complete: action.complete,
            text: action.text
          }
        ];
      case "TOGGLE_TODO":
        return state.map(
          todo =>
            todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
        );
      default:
        return state;
    }
  };





  export const filterTodo = (state = "SHOW_ALL", action) => {
    switch (action.type) {
      case "FILTER_TODO":
        return action.filter;
      default:
        return state;
    }
  };
  
  
  
  