import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Footer from "../containers/Footer";
import FetchButton from "./FetchButton";

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
    <FetchButton/>
  </div>
);

export default App;
