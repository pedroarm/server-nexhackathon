import express from 'express';

import UsersController from './controllers/UsersController'
import AuthController from './controllers/AuthController'
import verifyToken from './middlewares/VerifyToken';

const routes = express.Router();
const userscontroller = new UsersController()
const authController = new AuthController()

routes.get('/users',verifyToken, userscontroller.index)
routes.post('/users', userscontroller.create)

routes.post('/auth', authController.create)

export default routes;