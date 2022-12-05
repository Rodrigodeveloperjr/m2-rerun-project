import { createProductService } from '../../services/products/createProduct.service'
import { IProductRequest } from '../../interfaces/products'
import { Request, Response } from 'express'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/users'


const createProductController = async (req: Request, res: Response) => {

    const { image, name, description, category, price }: IProductRequest = req.body

    const email: string = req.email

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ email })

    const new_product = await createProductService(user!.id, { image, name, description, category, price })

    return res.status(201).json(new_product)
}

export { createProductController }
