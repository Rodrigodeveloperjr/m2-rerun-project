import { loginService } from '../../services/login/login.service'
import { ILoginRequest } from '../../interfaces/login'
import { Request, Response } from 'express'


const loginController = async (req: Request, res: Response) => {

    const { email, password }: ILoginRequest = req.body

    const token = await loginService({ email, password })

    return res.json(token)
}

export { loginController }
