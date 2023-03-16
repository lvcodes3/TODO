/////////////////////////////////////
// TODO ROUTES STORED IN THIS FILE //
/////////////////////////////////////
const { Router } = require('express');
const router = Router();
const controller = require('./controller');

// setting up the sub-routes created in controller
router.post('/', controller.createTodo);

router.get('/', controller.getTodos);

router.get('/:id', controller.getTodo);

router.put('/:id', controller.updateTodo);

router.delete('/:id', controller.deleteTodo);

module.exports = router;