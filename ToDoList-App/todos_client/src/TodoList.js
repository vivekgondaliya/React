import React, { Component } from 'react';
// import axios from 'axios';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const APIURL = '/api/todos'

class TodoList extends Component{
    state = {
        todos : []
    }

    componentDidMount(){
        this.loadTodos();
    }

    loadTodos = () =>{
        // axios.get(APIURL)
        // .then(response => {
        //     //TODO: error handling 
        //     const todos = response.data;
        //     this.setState({todos});
        // });
        fetch(APIURL)
        .then(resp => {
            if(!resp.ok){
                if(resp.status >=400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage : data.message};
                        throw err;
                    });
                }
                else {
                    let err = {errorMessage : "Please try again later, server is down at the moment."};
                        throw err;
                }
            }
            return resp.json();
        })
        .then(todos => this.setState({todos}));
    }

    addTodoItem = (item) => {
        fetch(APIURL, {
            method : 'post',
            headers : new Headers({
                'Content-Type' : 'application/json'
            }),
            body: JSON.stringify({name: item})
        })
        .then(resp => {
            if(!resp.ok){
                if(resp.status >=400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage : data.message};
                        throw err;
                    });
                }
                else {
                    let err = {errorMessage : "Please try again later, server is down at the moment."};
                        throw err;
                }
            }
            return resp.json();
        })
        .then(newTodo => {
            this.setState({todos : [...this.state.todos, newTodo]});
        });
    }

    render(){
        const todoItems = this.state.todos.map(item => {
            return <TodoItem key={item._id} item={item}/>
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
