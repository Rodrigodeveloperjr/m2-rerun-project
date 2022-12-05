import { Router } from 'express'

import { createUserController } from '../../controllers/users/createUser.controller'


const routes = Router()

const users_routes = () => {

    routes.post('', createUserController)

    return routes
}

export { users_routes }
