import { Request, Response } from 'express'
import db from '../database/connection';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_KEY = '*YypQNxTWxLpe#im3En'

export default class UsersController {

  async index(request: Request, response: Response) {
    const users = await db('users').select('*');
  
    return response.json(users);
  }

  async show(request: Request, response: Response) {

    const token = request.headers.authorization

    if (token == null) {
      return response.status(400).json({err: 'Parece que seu acesso está inválido.'})
    }else{
      jwt.verify(token, JWT_KEY, (err, data) => {
        if (err) {
          response.status(400).json({err: 'Seu token parece estar inválido :('})
        }
        response.json(data)

      })
    }
  }

  async create(request: Request, response: Response) {
    const {
      name,
      ra,
      school,
      date_of_birth,
      cell_phone,
      email,
      password,
    } = request.body;

    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(password, salt)
 
    await db('users').insert({
      name,
      ra,
      school,
      date_of_birth,
      cell_phone,
      email,
      password: hash
    })
 
    return response.json({ success: true })
 }
}
