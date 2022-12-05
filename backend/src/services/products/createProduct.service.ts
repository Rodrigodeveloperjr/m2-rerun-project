import { IProductRequest } from '../../interfaces/products'
import { AppDataSource } from '../../data-source'
import { Product } from '../../entities/products'
import { User } from '../../entities/users'


const createProductService = async (user_id: string, { image, name, description, category, price }: IProductRequest): Promise<Product> => {

    const productRepository = AppDataSource.getRepository(Product)

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ id: user_id })

    const product = new Product()
    product.image = image
    product.name = name
    product.description = description
    product.category = category
    product.price = price
    product.user = user!

    productRepository.create(product)
    await productRepository.save(product)

    return product
}

export { createProductService }
