import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{
  id: string;
  text: string;
  deleteTodo: () => void;
}> = (props) => {
  /*  const deleteHandler = (text: string) => {
        props.deleteTodo(text)
    } */
  return (
    <li className={classes.item} key={props.id} onClick={props.deleteTodo}>
      {props.text}
    </li>
  );
};
export default TodoItem;
