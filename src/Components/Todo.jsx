import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList';

const Todo = () => {
    document.title = 'TODO LIST';
    const [todo,setTodo] = React.useState([]);
    const [deletedItem,setDeletedItem] = React.useState([]);

    // NEW TASK ADDED TO TODO
    const handleAdd = (newTask) => {
        setTodo([...todo,newTask]);
    }

    // TOGGLING COMPLETED & NOT COMPLETED TASK 
    const handleToggle = (selectedId) => {
        setTodo(todo.map(item => item.id === selectedId ? {...item,status: !item.status} : item));
    }

    // TOGGLING FAVOURITES TASK
    const handleFavourites = (selectedId) => {
        setTodo(todo.map(item => item.id === selectedId ? {...item,favourites: !item.favourites} : item));
    }

    // DELETING A TASK
    const handleDelete = (selectedId) => {
        setTodo(todo.filter(item => item.id !== selectedId));
        setDeletedItem([...deletedItem, todo.filter(item => item.id === selectedId)]);
    }

    // UNDOING ONLY ALL DELETED TASK
    const handleUndo = () => {
        setTodo([...deletedItem[0], ...todo]);
        setDeletedItem(deletedItem.slice(1));
    }

    // EDITING TITLE OF A TASK
    const handleEdit = (selectedId, newTitle) => {
        setTodo(todo.map(item => item.id === selectedId ? {...item, title: newTitle} : item));
    }

    return (
        <div>
            <h1 style={{color: "white"}}>SIMPLE TODO</h1>
            <TodoInput handleAdd={handleAdd} />
            <TodoList todo={todo} handleToggle={handleToggle} handleFavourites={handleFavourites} handleDelete={handleDelete} handleUndo={handleUndo} deletedItem={deletedItem} handleEdit={handleEdit} />
        </div>
    )
}

export default Todo;