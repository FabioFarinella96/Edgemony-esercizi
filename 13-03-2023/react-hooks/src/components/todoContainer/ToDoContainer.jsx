import "./index.css";
import { useState } from "react";

const ToDoContainer = ({ todo, setRemove }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="ToDoContainer">
      <p className="todo-text">{todo}</p>

      <button
        className={`check-button ${checked && "checked"}`}
        onClick={() => setChecked((prev) => !prev)}
      >
        {checked ? <p>Completed</p> : <p>Complete</p>}
      </button>
    </div>
  );
};

export default ToDoContainer;
