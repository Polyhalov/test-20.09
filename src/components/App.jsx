import { useState } from "react";
import ToDoForm from "./ToDoFrom/ToDoForm";
import ToDo from "./ToDo/ToDo";
import { nanoid } from "nanoid";
import css from './app.module.css'

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [activeTodo, setActiveTodo] = useState(null);
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: nanoid(),
        task: userInput,
        comments:[]
      }
      setTodos([...todos, newItem])
    }
   };
  const removeTask = (id) => { 
    setTodos([...todos.filter((todo)=>todo.id!==id)])
  };
  
  const activeTask = (id) => {
    setActiveTodo(id)
  }

  console.log(activeTodo)
  return (
    <div className={css.reactItems}>
      <div >
        <h1 className={css.title}>Items</h1>
      </div>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo key={todo.id} todo={todo} removeTask={removeTask} activeTask={activeTask} activeTodo={activeTodo} />
        )
      })}
    </div>
  );
};
