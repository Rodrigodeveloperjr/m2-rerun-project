import { IUserRequest } from '../../interfaces/users'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/users'
import { hash } from 'bcrypt'


const createUserService = async ({ name, email, password }: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    const hashed_password = await hash(password, 10)

    const user = new User()
    user.name = name
    user.email = email
    user.password = hashed_password

    userRepository.create(user)
    await userRepository.save(user)

    return user
}

export { createUserService }
