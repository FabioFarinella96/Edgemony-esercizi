import "./index.css";
import { useState } from "react";

const ToDoContainer = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const [remove, setRemove] = useState(false);

  return (
    <div className={`ToDoContainer ${remove && "hidden-container"}`}>
      <p className="todo-text">{todo}</p>

      <button
        className={`check-button ${checked && "checked"}`}
        onClick={() => setChecked((prev) => !prev)}
      >
        {checked ? <p>Completed</p> : <p>Complete</p>}
      </button>
      <button
        className="remove-button"
        onClick={() => setRemove((prev) => !prev)}
      >
        X
      </button>
    </div>
  );
};

export default ToDoContainer;
