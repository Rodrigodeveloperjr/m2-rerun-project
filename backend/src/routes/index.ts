import { Router } from 'express'

import { my_products_routes, products_routes } from './products/products.routes'
import { login_routes } from './login/login.routes'
import { users_routes } from './users/users.routes'


const app_routes = (app: Router) => {

    app.use('/login', login_routes)
    app.use('/products', products_routes)
    app.use('/my/products', my_products_routes)
    app.use('/users', users_routes)
}

export { app_routes }
