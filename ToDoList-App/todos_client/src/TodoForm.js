import React, { Component } from 'react'

class TodoForm extends Component{
    state = {
        inputValue : ''
    }

    handleChange = (e) => {
        this.setState({inputValue : e.target.value});
    }

    handleSubmit = () => {
        this.props.addTodoItem(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    render(){
        return(
            <div>
                <input 
                    type="text" 
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleSubmit}
                >Add Todo</button>
            </div>
        );
    }
}

export default TodoForm;