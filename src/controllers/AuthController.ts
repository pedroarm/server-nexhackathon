import { Response, Request } from 'express';
import db from '../database/connection';
import jwt from 'jsonwebtoken'

const JWT_KEY = '*YypQNxTWxLpe#im3En'

class AuthController {
  async create(request: Request, response: Response) {

    const {
      email,
      password
    } = request.body;
 
    const userPass = await db('users')
      .where({'email': email, 'password': password})
      .select('*')
      .first()

    if(!userPass) {
      return response.status(400).json({err: 'Ops! Não conseguimos encontrar esse usuário.'})
    }
    return jwt.sign({
      name: userPass.name,
      school: userPass.school,
      email: userPass.email,
      profile_image: userPass.profile_image,
      headline: userPass.headline,
      description: userPass.description,
      points: userPass.points,
      linkedin: userPass.linkedin,
      github: userPass.github,
      instagram: userPass.instagrm
    }, JWT_KEY, {expiresIn: '72h'},(err, token) => {
      if(err) {
        response.status(400).json({err: 'Desculpe, tivemos um problema interno!'})
      }else{
        response.status(200).json({token: token})
      }
    })
  }
}

export default AuthController
