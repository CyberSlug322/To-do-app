import { applyMiddleware, combineReducers, createStore } from "redux";
import filterTodo from "./reducers/filterTodo.reducer";
import todos from "./reducers/todos.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers( {
    todos,
    filterTodo
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))