import { AppDataSource } from '../../data-source'
import { Product } from '../../entities/products'


const deleteProductService = async (product_id: string): Promise<void> => {

    const productRepository = AppDataSource.getRepository(Product)

    const product = await productRepository.findOneBy({ id: product_id })

    if(!product) {

        throw new Error('Product not found')
    }

    await productRepository.delete(product.id)
}

export { deleteProductService }
