import React, { useState } from 'react';
import "./List.css"
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheckCircle, faSave } from '@fortawesome/free-solid-svg-icons';

function List({ todos, setTodos }) {
    const [isEditing, setIsEditing] = useState(null);
    const [newTask, setNewTask] = useState("");

    const handleCheck = (id) => {
        const updatedTodos = todos.map((item) => {
            if (item.id === id) {
                return { ...item, status: !item.status };
            }
            return item;
        });
        setTodos(updatedTodos);
    }

    const handleDelete = (id) => {
        const newlist = todos.filter((item) => item.id !== id);
        setTodos(newlist);
    }

    const handleEdit = (id) => {
        setIsEditing(id);
        const taskToEdit = todos.find((item) => item.id === id);
        setNewTask(taskToEdit.task);
    }

    const handleEditSave = () => {
        const updatedTodos = todos.map((item) => {
            if (item.id === isEditing) {
                return { ...item, task: newTask };
            }
            return item;
        });
        setTodos(updatedTodos);
        setIsEditing(null);
    }

    return (
        <div className='list-container'>
            {todos.map((item) => (
                <li className={item.status ? "items items-true" : "items items-false"} key={item.id} >
                    <input
                        type='text'
                        value={isEditing === item.id ? newTask : item.task}
                        disabled={!isEditing || isEditing !== item.id}
                        id={item.id}
                        className='innerField'
                        onChange={(e) => {
                            if (isEditing) {
                                setNewTask(e.target.value);
                            }
                        }}
                    />

                    <FontAwesomeIcon icon={faCheckCircle} className="check-icon icons" onClick={() => handleCheck(item.id)} />
                    {isEditing === item.id ? (
                        <FontAwesomeIcon icon={faSave} className="edit-icon icons" onClick={handleEditSave} />
                    ) : (
                        <FontAwesomeIcon icon={faEdit} className="edit-icon icons" onClick={() => handleEdit(item.id)} />
                    )}
                    <FontAwesomeIcon icon={faTrash} className="trash-icon icons" onClick={() => handleDelete(item.id)} />
                </li>
            ))
            }
        </div >
    );
}

export default List;
