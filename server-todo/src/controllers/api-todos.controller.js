const { Router } = require('express');
const ErrorResponse = require('../classes/error-response');
const ToDo = require('../dataBase/models/ToDo.model');
const { asyncHandler } = require('../middlewares/middlewares');

const router = Router();

function initRoutes() {
    router.get('/', asyncHandler(getToDos));
    router.get('/:id', asyncHandler(getToDoById));
    router.post('/', asyncHandler(postToDos));
    router.patch('/:id', asyncHandler(patchToDo));
    router.delete('/', asyncHandler(deleteToDos));
    router.delete('/:id', asyncHandler(deleteToDoById));
}

async function postToDos(req, res, next) {
    const todos = await ToDo.create({
        where:{ ...req.body,
        userId:req.token.userId}
    });

    res.status(200).json({ todos });
}

async function getToDos(req, res, next) {
    const todos = await ToDo.findAll({
        where: { userId: req.token.userId}
    });

    res.status(200).json({ todos });
}

async function getToDoById(req, res, next) {
    const todo = await ToDo.findByPk({
        where: { id: req.params.id,
        userId: req.token.userId}
    });

    if (!todo) {
        throw new ErrorResponse('No todo found', 404);
    }

    res.status(200).json(todo);
}

async function patchToDo(req, res, next) {
    const todo = await ToDo.findOne({
        where: { id: req.params.id,
            userId: req.token.userId}
    });
   
    if (!todo) {
        throw new ErrorResponse('No todo found', 404);
    }
    await todo.update(req.body);

    res.status(200).json({ todo });
}

async function deleteToDos(req, res, next) {
    const todos = await ToDo.destroy({
        where: { userId: req.token.userId},
        truncate: true
    });

    res.status(200).json({ todos });
}

async function deleteToDoById(req, res, next) {
    const todo = await ToDo.findOne({
        where: { id: req.params.id,
            userId: req.token.userId}
    });
   
    if (!todo) {
        throw new ErrorResponse('No todo found', 404);
    }
    await todo.destroy();

    res.status(200).json({ todo });
}

initRoutes();

module.exports = router;