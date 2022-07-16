import { Router } from 'express';

import multer from 'multer';
import uploadConfig from './config/multer';

import { CreateUserCrontroller } from './controllers/user/CreateUserCrontroller';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// --------------------------------------------------- Rotas USERS -----------------------------------------------//

// Criando novos usuários
router.post('/users', new CreateUserCrontroller().handle)

// Logando usuário
router.post('/session', new AuthUserController().handle)

// Obtendo detalhes do usuário
// Criando também um middleware para verificar se o token do usuário está correto
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)

// --------------------------------------------------- Rotas CATEGORY --------------------------------------------//

// Cadastrando nova categoria de produto
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

// Listando nova categoria de produto
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// --------------------------------------------------- Rotas PRODUCT ---------------------------------------------//
// Cadastrando novo produto
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// --------------------------------------------------- Rotas ORDER -----------------------------------------------//
router.post('/order', isAuthenticated, new CreateOrderController().handle)

export { router };