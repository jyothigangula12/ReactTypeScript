import { FormEvent, useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/Context";
const NewTodo: React.FC = (props) => {
  const todosCtx = useContext(TodoContext);
  const InputTodoRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const todoInput = InputTodoRef.current!.value;
    if (todoInput.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(todoInput);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text" id="text"></label>
      <input type="text" ref={InputTodoRef}></input>
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
