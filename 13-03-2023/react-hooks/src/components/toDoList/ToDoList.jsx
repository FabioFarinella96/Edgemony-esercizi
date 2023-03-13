import "./index.css";
import ToDoContainer from "../../components/todoContainer";
import { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, inputValue]);
    setInputValue("");
    console.log(todo);
  };

  return (
    <div className="ToDoList">
      <form onSubmit={onHandleSubmit} className="todo-form">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="todo-input"
          placeholder="What to do today?"
        />
        <input type="submit" className="todo-button" value="Add" />
      </form>
      {todo.map((element) => (
        <ToDoContainer todo={element} key={element} />
      ))}
    </div>
  );
};

export default ToDoList;
