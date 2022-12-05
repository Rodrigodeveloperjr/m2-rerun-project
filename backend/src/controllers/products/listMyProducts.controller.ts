import { listMyProductsService } from '../../services/products/listMyProducts.service'
import { AppDataSource } from '../../data-source'
import { Request, Response } from 'express'
import { User } from '../../entities/users'


const listMyProductsController = async (req: Request, res: Response) => {

    const email: string = req.email

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ email })

    const products = await listMyProductsService(user!.id)

    return res.json(products)
}

export { listMyProductsController }
