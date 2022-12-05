import { IProductRequest } from '../../interfaces/products'
import { AppDataSource } from '../../data-source'
import { Product } from '../../entities/products'


const updateProductService = async (product_id: string, { image, name, description, category, price }: IProductRequest): Promise<Product> => {

    const productRepository = AppDataSource.getRepository(Product)

    const find_product = await productRepository.findOneBy({ id: product_id })

    if(!find_product) {

        throw new Error('Product not found')
    }

    await productRepository.update(product_id, {

        image: image ? image : find_product.image,
        name: name ? name : find_product.name,
        description: description ? description : find_product.description,
        category: category ? category : find_product.category,
        price: price ? price : find_product.price,
    })

    const product = await productRepository.findOneBy({ id: product_id })

    return product!
}

export { updateProductService }
