import { Request, Response } from 'express'
import { IUserRequest } from '../../interfaces/users'
import { createUserService } from '../../services/users/createUser.service'


const createUserController = async (req: Request, res: Response) => {

    const { name, email, password }: IUserRequest = req.body

    const new_user = await createUserService({ name, email, password })

    return res.status(201).json(new_user)
}

export { createUserController }
