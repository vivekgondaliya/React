const router = require('express').Router();
const helpers = require('../helpers/todos');

/*
    GET     - /api/todos
    POST    - /api/todos
    GET     - /api/todos/:todoId
    PUT     - /api/todos/:todoId
    DELETE  - /api/todos/:todoId
*/

const db = require('../models');

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo);

router.route('/:todoId')
    .get(helpers.getOneTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;