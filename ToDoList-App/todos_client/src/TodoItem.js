import React from 'react';

const TodoItem = ({item}) => {
    return (
        <li
            style={{
                textDecoration : item.completed ? 'line-through' : 'none'
            }}
        >
            {item.name}
        </li>
    );
}

export default TodoItem;