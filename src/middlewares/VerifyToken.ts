import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

const JWT_KEY = '*YypQNxTWxLpe#im3En'

function verifyToken(request: Request, response: Response, next: NextFunction) {
  
  const authHeader = <string>request.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    return response.status(400).json({err: 'Parece que seu acesso está inválido.'})
  }else{
    jwt.verify(token, JWT_KEY, (err, data) => {
      if (err) {
        response.status(401).json({err: 'Seu token parece estar inválido :('})
      }
      console.log(token)
      console.log(data)
      next()
    })
  }
}

export default verifyToken