import { listProductsService } from '../../services/products/listProducts.service'
import { Request, Response } from 'express'


const listProductsController = async (req: Request, res: Response) => {

    const products = await listProductsService()

    return res.json(products)
}

export { listProductsController }
