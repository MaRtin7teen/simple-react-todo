import React from 'react';
import {v4 as uuid} from 'uuid';
import styles from './TodoInput.module.css';
import {GrAdd} from 'react-icons/gr';

const TodoInput = ({handleAdd}) => {
    const [newTodo,setNewTodo] =  React.useState("");
    const [error,setError] = React.useState(false);

    const handleSubmit = () => {
        if (!newTodo.trim().length) {
            return setError(true);
        }
        const newTask = {
            title: newTodo,
            status: false,
            favourites: false,
            id: uuid()
        }
        handleAdd(newTask);
        setNewTodo("");
    }

    const handleChange = (e) => {
        if (e.key === 'Enter') {
            return handleSubmit();
        }
        setError(false);
        setNewTodo(e.target.value);
    }

    return (
        <div className={styles.inputContainer}>
            <input type='text' value={newTodo} placeholder='Add a todo' onClick={() => setError(false)} onKeyPress={handleChange} onChange={handleChange} autoFocus />
            <span onClick={handleSubmit}><GrAdd/></span>
            {
                error ? <h4 style={{color: 'red'}}>TODO CANNOT BE EMPTY!</h4> : <h4>TYPE AND HIT ENTER TO ADD TASKS</h4>
            }
        </div>
    )
}

export default TodoInput
