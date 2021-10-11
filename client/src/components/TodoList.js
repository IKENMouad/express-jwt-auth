import React, { useState } from "react";
import "./todolist.scss";
import classnames from "classnames";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      label: "lable one",
      completed: true,
    },
    {
      id: "2",
      label: "label two",
      completed: false,
    },
    {
      id: "1",
      label: "lable tree",
      completed: true,
    },
  ]);

  return (
    <div className=" ">
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center "
          >
            {todo.label}
            <span
              className={classnames(
                "badge badge-pill",
                todo.completed ? "badge-success" : "badge-danger"
              )}
            >
              <i
                className={classnames(
                  "fa",
                  todo.completed ? "fa-thumbs-up" : "fa-thumbs-down"
                )}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
