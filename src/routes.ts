import { Router } from 'express';

import { CreateUserCrontroller } from './controllers/user/CreateUserCrontroller';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// Rotas users do controller
// Criando novos usuários
router.post('/users', new CreateUserCrontroller().handle)

// Logando usuário
router.post('/session', new AuthUserController().handle)

// Obtendo detalhes do usuário
// Criando também um middleware para verificar se o token do usuário está correto
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)


export { router };