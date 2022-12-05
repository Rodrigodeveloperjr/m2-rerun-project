import { Router } from 'express'

import { listMyProductsController } from '../../controllers/products/listMyProducts.controller'
import { createProductController } from '../../controllers/products/createProduct.controller'
import { deleteProductController } from '../../controllers/products/deleteProduct.controller'
import { updateProductController } from '../../controllers/products/updateProduct.controller'
import { listProductsController } from '../../controllers/products/listProducts.controller'

import { tokenMiddleware } from '../../middlewares/token.middleware'


const routes = Router()

const products_routes = () => {

    routes.get('', listProductsController)

    return routes
}

const my_products_routes = () => {

    routes.post('', tokenMiddleware, createProductController)

    routes.get('/:id', tokenMiddleware, listMyProductsController)

    routes.patch('/:id', tokenMiddleware, updateProductController)
    
    routes.delete('/:id', tokenMiddleware, deleteProductController)

    return routes
}

export { products_routes, my_products_routes }
