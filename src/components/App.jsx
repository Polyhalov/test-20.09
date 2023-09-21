import { useEffect, useState } from "react";
import ToDoForm from "./ToDoFrom/ToDoForm";
import ToDo from "./ToDo/ToDo";
import { nanoid } from "nanoid";
import css from './app.module.css'
import CommentsForm from "./CommentsForm/CommentsForm";

export const App = () => {
  const [todos, setTodos] = useState(()=>{;
    const todosFromLocalStorage = localStorage.getItem('todos');
    if (todosFromLocalStorage !== null) {
      const parsedTodos = JSON.parse(todosFromLocalStorage)
      return parsedTodos;
    }
    return [];
  });
  const [activeTodo, setActiveTodo] = useState(() => {
    const activeFromLocalStorage = localStorage.getItem('activeTodo');
    if (activeFromLocalStorage !== null) {
      const parsedActive = JSON.parse(activeFromLocalStorage);
      return parsedActive;
    }
    return null;
  });


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('activeTodo', JSON.stringify(activeTodo));
  }, [activeTodo]);
  

  const activeTask = (todo) => {
    setActiveTodo(todo);
  }
  console.log(activeTodo);
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: nanoid(),
        task: userInput,
        comments:[]
      }
      setTodos([...todos, newItem])
      if (!todos.length) {
      setActiveTodo(newItem)
    }
    }
    
   };
  const removeTask = (id) => { 
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos([...newTodos]);
    if (newTodos.length){
      activeTask(newTodos[newTodos.length-1])
    }
      else{setActiveTodo(null)}
  }

  const addComment = (color,text) => {
    activeTodo.comments.push({
      id: `${activeTodo.id}-${activeTodo.comments.length}`,
      color,
      text
    })
    for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === activeTodo.id) {
                todos[i] = {
                    ...activeTodo
                };
                break;
            }
    }
    setTodos([...todos]);
    setActiveTodo({ ...activeTodo });
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
        <CommentsForm activeTodo={activeTodo} addComment={addComment}></CommentsForm>
      </div>
    </>
  );
};
