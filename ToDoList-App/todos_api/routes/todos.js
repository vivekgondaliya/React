const router = require('express').Router();

/*
    GET     - /api/todos
    POST    - /api/todos
    GET     - /api/todos/:todoId
    PUT     - /api/todos/:todoId
    DELETE  - /api/todos/:todoId
*/

const db = require('../models');

router.get('/', (req, res) => {
    db.Todo.find()
    .then((todos) => {
        res.json(todos);
    })
    .catch( (error) => {
        res.send(error);
    })
});

router.get('/:todoId', (req, res) => {
    db.Todo.findById(req.params.todoId)
    .then((todo) => {
        res.json(todo);
    })
    .catch( (error) => {
        res.send(error);
    })
});

router.post('/', (req, res) => {
    db.Todo.create(req.body)
    .then( newTodo => {
        res.status(201).json(newTodo);
    })
    .catch( (error) => {
        res.send(error);
    })
    
});

router.put('/:todoId', (req, res) => {
    db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, {new : true} )
    .then( todo => {
        res.json(todo);
    })
    .catch( (error) => {
        res.send(error);
    });
});

router.delete('/:todoId', (req, res) => {
    db.Todo.findOneAndDelete({ _id: req.params.todoId })
    .then( todo => {
        res.json({
            message: 'Deleted ' + todo.name.toUpperCase()
        });
    })
    .catch( (error) => {
        res.send(error);
    });
});


module.exports = router;