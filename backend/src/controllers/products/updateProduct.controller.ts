import { updateProductService } from '../../services/products/updateProduct.service'
import { Request, Response } from 'express'


const updateProductController = async (req: Request, res: Response) => {

    const id: string = req.params.id

    const updated_product = await updateProductService(id, req.body)

    return res.json(updated_product)
}

export { updateProductController }
