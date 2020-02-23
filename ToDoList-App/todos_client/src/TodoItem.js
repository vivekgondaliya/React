import React from 'react';

const TodoItem = ({item, onToggle, onDelete}) => {
    return (
        <li>
            <span
                style={{
                    textDecoration : item.completed ? 'line-through' : 'none'
                }}
                onClick={ () => {onToggle(item)} }
            >
            {item.name}
            </span>
            <button onClick={ () => {onDelete(item._id)} }>Delete</button>
        </li>
    );
}

export default TodoItem;