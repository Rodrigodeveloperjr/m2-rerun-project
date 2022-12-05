import { AppDataSource } from '../../data-source'
import { Product } from '../../entities/products'
import { User } from '../../entities/users'


const listMyProductsService = async (id: string): Promise<Product[]> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ id })

    return user!.products
}

export { listMyProductsService }
