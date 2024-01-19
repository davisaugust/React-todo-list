import { useState } from 'react'
import todo from "./components/todo"
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);


  return (
    
    <div className="app">
      
      <div className="todo-list">
      <h1>Lista de tarefas</h1>
        {todos.map((todo) =>(
          <todo />
        ))}
      </div>
    </div>
  )
}

export default App
