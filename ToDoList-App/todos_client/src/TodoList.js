import React, { Component } from 'react';
// import axios from 'axios';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

import * as apiCalls from './api';

class TodoList extends Component{
    state = {
        todos : []
    }

    componentDidMount(){
        this.loadTodos();
    }

    loadTodos = async() =>{
        // axios.get(APIURL)
        // .then(response => {
        //     //TODO: error handling 
        //     const todos = response.data;
        //     this.setState({todos});
        // });
        let todos = await apiCalls.getTodos();
        this.setState({todos});
    }

    addTodoItem = async(item) => {
        let newTodo = await apiCalls.addTodo(item);
        this.setState({todos : [...this.state.todos, newTodo]});
    }

    deleteTodoItem = async(id) => {
        await apiCalls.deleteTodo(id);
        const todos = this.state.todos.filter( item => item._id !== id);
        this.setState({todos});
    }

    toggleTodoItem = async(todo) => {
        const toggledTodo = await apiCalls.updateTodo(todo);
        const todos = this.state.todos.map( item => {
            if(item._id === toggledTodo._id){
                item.completed = toggledTodo.completed;
            }
            return item;
        });
        this.setState({todos});
    }

    render(){
        const todoItems = this.state.todos.map(item => {
            return <TodoItem 
                    key={item._id} 
                    item={item} 
                    onToggle={this.toggleTodoItem}
                    onDelete={this.deleteTodoItem}
                    />
        });
        return(
            <div>
                <h1>Todo List</h1>
                <TodoForm addTodoItem={this.addTodoItem}/>
                <ul style={{ listStyleType: 'none'}}>
                    {todoItems}  
                </ul>     
            </div>
        );
    }
}

export default TodoList;
