const UsersRouter = require('express').Router();
const usersActions = require('../Controllers/user-controller');

UsersRouter.post('/login', usersActions.login);
UsersRouter.post('/register', usersActions.register);
UsersRouter.get('/', usersActions.getAllUsers);
UsersRouter.get('/:id',usersActions.getUserById);
UsersRouter.put('/:id',usersActions.updateUser);
UsersRouter.post('/',usersActions.addUser);
UsersRouter.delete('/:id',usersActions.deleteUser);

module.exports = UsersRouter;