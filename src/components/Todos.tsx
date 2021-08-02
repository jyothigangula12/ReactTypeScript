import { useContext } from "react";
import Todo from "../modal/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/Context";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodoContext);
  console.log(props);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          deleteTodo={todosCtx.deleteTodo.bind(null, item.text)}
        />
      ))}
    </ul>
  );
};
export default Todos;
