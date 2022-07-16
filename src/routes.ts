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
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';


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

// Listando produto por categoria
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// --------------------------------------------------- Rotas ORDER -----------------------------------------------//
// Criando novo pedido
router.post('/order', isAuthenticated, new CreateOrderController().handle)

// Excluindo pedido
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

// Adicionando itens ao pedido
router.post('/order/item', isAuthenticated, new AddItemController().handle)

// Removendo itens do pedido
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

// Enviando pedido a cozinha
router.put('/order/send', isAuthenticated, new SendOrderController().handle)

// Listando pedidos da cozinha
router.get('/orders', isAuthenticated, new ListOrderController().handle)

// Listando detalhes dos pedidos
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

// Finalizando pedidos para o status true
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)
export { router };