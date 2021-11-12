const ErrorResponse = require("../classes/error-response");
const User = require("../dataBase/models/User.model");
const { asyncHandler } = require("../middlewares/middlewares");
const router = require("./api-todos.controller");

function initRoutes() {
    router.get('/:id', asyncHandler(getUserInfo));
    router.patch('/:id', asyncHandler(updateUser));
    router.post('/logout', asyncHandler(logout));
}

async function getUserInfo(req, res, next){
    const userInfo = await User.findByPk(req.params.id);

    if(!userInfo){
        throw new ErrorResponse('User not found', 404);
    }

    res.status(200).json(userInfo);
}

async function updateUser(req, res, next){
    const user = await User.findByPk(req.params.id);

    if(!user){
        throw new ErrorResponse('User not found', 404);
    }
    await user.update(req.body);

    res.status(200).json(user);
}

async function logout(req, res, next){
    await req.token.destroy();

    res.status(200);
}


initRoutes();

module.exports = router;