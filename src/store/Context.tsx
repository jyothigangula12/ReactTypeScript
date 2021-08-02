import React, { useContext, useState } from "react";

import Todo from "../modal/todo";
type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};
export const TodoContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  deleteTodo: (text: string) => {},
});
const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  const newTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoText: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.text !== todoText);
    });
  };
  const contextValue: TodosContextObject = {
    items: todos,
    addTodo: newTodoHandler,
    deleteTodo: removeTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};
export default TodosContextProvider;
