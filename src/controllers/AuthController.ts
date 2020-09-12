import { Response, Request } from 'express';
import db from '../database/connection';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_KEY = '*YypQNxTWxLpe#im3En'

class AuthController {
  async create(request: Request, response: Response) {

    const {
      email,
      password
    } = request.body;
 
    const userPass = await db('users')
      .where({'email': email})
      .select('*')
      .first()

    var match = await bcrypt.compare(password, userPass.password)

    if(match) {

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
          response.status(401).json({err: 'Desculpe, tivemos um problema interno!'})
        }else{
          response.status(200).json({token: token})
          response.send(token)
        }
      })
    }
    return response.status(400).json({err: 'Ops! Não conseguimos encontrar esse usuário.'})
  }
}

export default AuthController
