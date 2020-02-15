import React, { Component } from 'react';
import axios from 'axios';

const APIURL = '/api/todos'

class TodoList extends Component{
    state = {
        todos : []
    }

    componentWillMount(){
        this.loadTodos();
    }

    loadTodos = () =>{
        axios.get(APIURL)
        .then(response => {
            //TODO: error handling 
            const todos = response.data;
            this.setState({todos});
        });
    }

    render(){
        return(
            <h1>Todo List Component</h1>  
        );
    }
}

export default TodoList;
