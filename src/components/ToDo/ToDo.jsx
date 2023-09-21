import PropTypes from 'prop-types';
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
                <li onClick={()=>activeTask(todo)} className={(activeTodo.id === todo.id) ? css.listItemActive : css.listItem} key={todo.id}><span className={css.todoTask}>{todo.task}</span>
                    <span className={css.quantity}>{todo.comments.length}</span>
                    <button className={css.deleteBtn} onClick={(e)=>handleDelete(e,todo.id)}>Delete</button>
                </li>
            </ul>
        </div>
        
    )
}

ToDo.propTypes = {
    todo: PropTypes.array,
    activeTodo: PropTypes.object,
    activeTask: PropTypes.func,
    removeTask: PropTypes.func
}
export default ToDo;

