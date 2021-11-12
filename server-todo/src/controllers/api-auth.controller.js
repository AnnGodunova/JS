const { Router } = require('express');
const ErrorResponse = require('../classes/error-response');
const User = require('../dataBase/models/User.model');
const Token = require('../dataBase/models/Token.model');
const { asyncHandler } = require('../middlewares/middlewares');
const {nanoid} = require('nanoid');

const router = Router();

function initRoutes() {
    router.post('/registration', asyncHandler(Registration));
    router.post('/login', asyncHandler(Login));
}

async function Registration(req, res, next) {
    const users = await User.findOne({
        where: { email: req.body.email, 
        login: req.body.login}
    });

    if (users) {
        throw new ErrorResponse('User found', 400);
    }

    const newUser = await User.create(req.body)
    res.status(200).json({ newUser });
}

async function Login(req, res, next){
    const users = await User.findOne({
        where: { login: req.body.login, 
        password: req.body.password}
    });

    if (!users) {
        throw new ErrorResponse('User not found', 404);
    }


    const token = await Token.create({ userId: users.id, value: nanoid(128) })
    res.status(200).json({ accessToken: token.value })

}

initRoutes();

module.exports = router;