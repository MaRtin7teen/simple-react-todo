import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

const TodoList = ({todo,handleToggle,handleFavourites,handleDelete,handleUndo,deletedItem,handleEdit}) => {
    const [showDone,setShowDone] = React.useState(false);

    // HIDE or SHOW COMPLETED TASK TOGGLE FUNCTION
    const handleChange = () => {
        setShowDone(!showDone);
    }

    return (
        <div className={styles.listContainer}>
            {
                todo.length || deletedItem.length ? 
                <div>
                    <hr/>
                    {/* HEADING AND UNDO BUTTON */}
                    <div className={styles.heading}>
                        <h3 style={{textAlign: 'left',padding: 5, color: 'lightgray'}}>TODO LIST</h3>

                        {/* UNDO BUTTON */}
                        {
                            deletedItem.length ? <button onClick={() => handleUndo()}>UNDO</button> : false
                        }
                    </div>

                    {/* NOT COMPLETED TASKS LIST*/}
                    {
                        // FAVOURITES
                        todo.filter(item => item.status === false).filter(item => item.favourites === true).map(item => <TodoItem key={item.id} item={item} handleFavourites={handleFavourites} handleDelete={handleDelete} handleToggle={handleToggle} handleEdit={handleEdit} />)
                    }
                    {
                        // NOT FAVORITES
                        todo.filter(item => item.status === false).filter(item => item.favourites === false).map(item => <TodoItem key={item.id} item={item} handleFavourites={handleFavourites} handleDelete={handleDelete} handleToggle={handleToggle} handleEdit={handleEdit} />)
                    }
                    <hr/>
                </div> :
                // NO TODOS 
                false
                // <h2>Add a to-do to see it here</h2>
            }
            {/* SHOW or HIDE COMPLETED TASKS */}
            <div className={styles.buttonContainer}>
                {
                    todo.filter(item => item.status === true).length ? <button onClick={handleChange}>{showDone ? "HIDE COMPLETED" : "SHOW COMPLETED"}</button> : false
                }
            </div>
            {/* COMPLETED TASKS LIST */}
            <div>
                {
                    // FAVOURITES
                    showDone ? todo.filter(item => item.status === true).filter(item => item.favourites === true).map(item => <TodoItem key={item.id} item={item} handleFavourites={handleFavourites} handleDelete={handleDelete} handleToggle={handleToggle} handleEdit={handleEdit} />) : false
                }
                {
                    // NOT FAVOURITES
                    showDone ? todo.filter(item => item.status === true).filter(item => item.favourites === false).map(item => <TodoItem key={item.id} item={item} handleFavourites={handleFavourites} handleDelete={handleDelete} handleToggle={handleToggle} handleEdit={handleEdit} />) : false
                }
            </div>

        </div>
    )
}

export default TodoList;