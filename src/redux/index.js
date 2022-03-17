import { applyMiddleware, combineReducers, createStore } from "redux";
import todoFilterReducer from "./reducers/todoFilter.reducer";
import todosReducer from "./reducers/todos.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { persistStore, persistReducer, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers( {
    todos: todosReducer,
    filterTodo: todoFilterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export const persistor = persistStore(store)
export default store

