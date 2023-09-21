import css from './ToDo.module.css'
function ToDo({ todo, removeTask, activeTodo, activeTask }) {

    const handleDelete = (e,id) => {
         e.stopPropagation();
        e.preventDefault();
        removeTask(id)
    }
    
    return (
        <div>
            <ul className={css.toDoList}>
                <li onClick={()=>activeTask(todo.id)} className={(activeTodo === todo.id) ? css.listItemActive : css.listItem} key={todo.id}><span className={css.todoTask}>{todo.task}</span>
                    <span className={css.quantity}>{todo.comments.length}</span>
                    <button className={css.deleteBtn} onClick={(e)=>handleDelete(e,todo.id)}>Delete</button>
                </li>
            </ul>
        </div>
        
    )
}
export default ToDo;