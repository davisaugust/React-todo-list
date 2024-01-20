import React from "react";
import exclamationSign from "/src/img/exclamation.svg"

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <img
        src={todo.isCompleted ? exclamationSign : ""}
        alt={todo.isCompleted ? "Tarefa concluída" : "Tarefa incompleta"}
        style={{ width: '20px', height: '20px', marginRight: '8px' }}
      />
      <div className="content">
        <p>{todo.text}</p>
        <p>({todo.category})</p>
      </div>

      <div>
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
