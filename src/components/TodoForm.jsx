import { useState } from "react";
import React from "react";

const TodoForm = ( {addTodo} ) => {
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
          name=""
          id=""
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>

        <select
          value={priority}
          name=""
          id=""
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Selecione o nível de prioridade</option>
          <option value="urgency">Urgente</option>
          <option value="noturgent">Não urgente</option>
          <option value="Tranquilo">Tranquilo</option>
        </select>
        <button type=
        "submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
