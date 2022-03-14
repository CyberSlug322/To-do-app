import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Footer from "../containers/Footer";
import Button from "./FetchButton";

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
    <Button/>
  </div>
);

export default App;
