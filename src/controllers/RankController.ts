import { Response, Request } from 'express';
import db from '../database/connection';

export default class {
  async index(request: Request, response: Response) {
    const rank = await db('users').orderBy('points', 'desc')

    response.json(rank)
  }
}