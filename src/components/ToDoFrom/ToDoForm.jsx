import { useState } from "react";
import css from './ToDoForm.module.css'
function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput);
        setUserInput('');
    }
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                className={css.formControl}
                value={userInput}
                type='text'
                onChange={handleChange}
                placeholder="Type name here..."
                required
            />
            <button className={css.btn}>Add New</button>
        </form>
    );
}

export default ToDoForm;