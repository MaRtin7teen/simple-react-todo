import React from 'react';
import {AiFillStar,AiFillDelete} from 'react-icons/ai';
import styles from './TodoItem.module.css';
import { FaEdit, FaSave } from 'react-icons/fa';

const TodoItem = ({item,handleToggle,handleFavourites,handleDelete,handleEdit}) => {
    const [edit, setEdit] = React.useState(false);

    const [newTitle, setNewTitle] = React.useState(item.title);

    const handleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const saveChange = (id) => {
        handleEdit(id, newTitle);
        setEdit(false);
    }

    const handleKey = (e, id) => {
        if (e.key === 'Enter') {
            saveChange(id);
        }
    }

    return (
        <div className={styles.itemContainer} style={{backgroundColor: item.status ? 'rgb(248, 168, 168)' : 'rgb(178, 240, 163)'}}>

            {/* EDIT TITLE */}
            {
                edit ? 
                <span>
                    <FaSave onClick={() => saveChange(item.id)}/>
                </span> :
                <span>
                    <FaEdit onClick={() => setEdit(true)} />
                </span>
            }

            {/* TASK TITLE */}
            <span className={styles.inputContainer} onClick={!edit ? () => handleToggle(item.id) : () => {}} >
                {
                    edit ?
                    <input type="text" className={styles.editEnable} placeholder={item.title} value={newTitle} onKeyPress={e => handleKey(e, item.id)} onChange={e => handleChange(e)} style={{textDecoration: "none", color: "darkblue"}} autoFocus/> :

                    <input type="text" className={styles.editDisable} value={item.title} disabled={true} style={{color: item.status ? "maroon" : "green", textDecoration: item.status ? "line-through" : "none"}} />
                }
                
            </span>

            {/* TASK FAVOURITES TOGGLE */}
            <span onClick={() => handleFavourites(item.id)}><AiFillStar style={{color: item.favourites ? "rgb(196, 155, 21)" : "gray"}} /></span>

            {/* TASK DELETE */}
            <span onClick={() => handleDelete(item.id)}><AiFillDelete style={{color: 'red'}}/></span>

        </div>
    )
}

export default TodoItem
