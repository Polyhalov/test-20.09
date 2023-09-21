import { useState } from "react";
import ToDoForm from "./ToDoFrom/ToDoForm";
import ToDo from "./ToDo/ToDo";
import { nanoid } from "nanoid";
import css from './app.module.css'
import Comments from "./Comments/Comments";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [activeTodo, setActiveTodo] = useState(null);

  const activeTask = (id) => {
    setActiveTodo(id);
  }

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: nanoid(),
        task: userInput,
        comments:[]
      }
      setTodos([...todos, newItem])
      if (!todos.length) {
      setActiveTodo(newItem.id)
    }
    }
    
   };
  const removeTask = (id) => { 
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos([...newTodos]);
    if (newTodos.length){
      setActiveTodo(newTodos[newTodos.length-1].id)
    }
      else{setActiveTodo(null)}
    }
  
 
  
  return (
    <>
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
      <div className={css.comments}>
        <Comments activeTodo={activeTodo}></Comments>
      </div>
    </>
  );
};
