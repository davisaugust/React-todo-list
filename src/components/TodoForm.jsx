import { useState } from "react";
import React from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category || !priority) return;
    // adicionar todo
    addTodo(value, category, priority);
    // limpar os campos
    setValue("");
    setCategory("");
    setPriority("");
  };

  return (
    <div className="todo-list">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Selecione a prioridade</option>
          <option value="Alta">Alta</option>
          <option value="Média">Média</option>
          <option value="Baixa">Baixa</option>
        </select>

        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
