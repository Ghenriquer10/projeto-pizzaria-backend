import { Router } from 'express';

import { CreateUserCrontroller } from './controllers/user/CreateUserCrontroller';
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

// Rotas users do controller
router.post('/users', new CreateUserCrontroller().handle)

router.post('/session', new AuthUserController().handle)

export { router };