import { Router } from 'express'

import { loginController } from '../../controllers/login/login.controller'


const routes = Router()

const login_routes = () => {

    routes.post('', loginController)

    return routes
}

export { login_routes }
