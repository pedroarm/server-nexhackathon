import { Request, Response } from 'express'
import db from '../database/connection';

export default class UsersController {

  async index(request: Request, response: Response) {
    const users = await db('users').select('*');
  
    return response.json(users);
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
 
    await db('users').insert({
      name,
      ra,
      school,
      date_of_birth,
      cell_phone,
      email,
      password
    })
 
    return response.json({ success: true })
 }
}
