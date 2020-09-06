import express, { Response, Request, NextFunction }  from 'express';
import jwt from 'jsonwebtoken'

import UsersController from './controllers/UsersController'
import AuthController from './controllers/AuthController'


const routes = express.Router();
const userscontroller = new UsersController()
const authController = new AuthController()

const JWT_KEY = '*YypQNxTWxLpe#im3En'

// function verifyToken(request: Request, response: Response, next: NextFunction) {
  
//   const authHeader = request.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]

//   if (token == null) {
//     return response.status(400).json({err: 'Parece que seu acesso está inválido.'})
//   }else{
//     jwt.verify(token, JWT_KEY, (err, data) => {
//       if (err) {
//         response.status(401).json({err: 'Seu token parece estar inválido :('})
//       }
//       console.log(data)
//       request.token = token
//       next()
//     })
//   }
// }

routes.get('/users', userscontroller.index)
routes.post('/users', userscontroller.create)

routes.post('/auth', authController.create)

export default routes;