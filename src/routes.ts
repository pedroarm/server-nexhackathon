import express from 'express';

import UsersController from './controllers/UsersController'
import AuthController from './controllers/AuthController'
import RankController from './controllers/RankController'

const routes = express.Router();
const userscontroller = new UsersController()
const authController = new AuthController()
const rankController = new RankController()

routes.get('/users', userscontroller.index)
routes.get('/user', userscontroller.show)
routes.post('/users', userscontroller.create)

routes.get('/rank', rankController.index)

routes.post('/auth', authController.create)

export default routes;