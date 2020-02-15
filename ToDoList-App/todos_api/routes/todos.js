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
    res.json({
        'message' : 'returns todo with id: '+ req.params.todoId
    });
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


module.exports = router;