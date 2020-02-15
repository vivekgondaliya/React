const db = require('../models');

exports.getTodos = (req, res) => {
    db.Todo.find()
    .then((todos) => {
        res.json(todos);
    })
    .catch( (error) => {
        res.send(error);
    })
};

exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
    .then( newTodo => {
        res.status(201).json(newTodo);
    })
    .catch( (error) => {
        res.send(error);
    })   
};

exports.getOneTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
    .then((todo) => {
        res.json(todo);
    })
    .catch( (error) => {
        res.send(error);
    })
};

exports.updateTodo = (req, res) => {
    db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, {new : true} )
    .then( todo => {
        res.json(todo);
    })
    .catch( (error) => {
        res.send(error);
    });
};

exports.deleteTodo = (req, res) => {
    db.Todo.findOneAndDelete({ _id: req.params.todoId })
    .then( todo => {
        res.json({
            message: 'Deleted ' + todo.name.toUpperCase()
        });
    })
    .catch( (error) => {
        res.send(error);
    });
};


module.exports = exports;