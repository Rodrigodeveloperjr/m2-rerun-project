import { ILoginRequest } from '../../interfaces/login'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/users'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'


const loginService = async ({ email, password }: ILoginRequest): Promise<object> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ email })

    if(!user) {

        throw new Error('Invalid credentials')
    }

    const password_match = await compare(password, user.password)

    if(!password_match) {

        throw new Error('Invalid credentials')
    }

    const token = jwt.sign({ email }, process.env.SECRET_KEY as string, { expiresIn: '24h', subject: user.id })

    return { token }
}

export { loginService }
