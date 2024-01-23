import React from "react";
import checkSign from "/src/img/check2.svg"
import exclamationSign from "/src/img/exclamation.svg"

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <img
        src={todo.isCompleted ? checkSign : exclamationSign}
        alt={todo.isCompleted ? "Tarefa concluída" : "Tarefa incompleta"}
        style={{ width: '2.5em', height: '2.5em'}}
      />
      <div className="content">
        <p>{todo.text}</p>
        <p>({todo.category})</p>
      </div>

      <div className="btn_container">
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
