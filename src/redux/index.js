import { applyMiddleware, combineReducers, createStore } from "redux";
import { todos, filterTodo } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers( {
    todos,
    filterTodo
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))