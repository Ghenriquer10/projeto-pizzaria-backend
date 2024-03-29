"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("./config/multer"));
const CreateUserCrontroller_1 = require("./controllers/user/CreateUserCrontroller");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const RemoveItemController_1 = require("./controllers/order/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrderController_1 = require("./controllers/order/ListOrderController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
// --------------------------------------------------- Rotas USERS -----------------------------------------------//
// Criando novos usuários
router.post('/users', new CreateUserCrontroller_1.CreateUserCrontroller().handle);
// Logando usuário
router.post('/session', new AuthUserController_1.AuthUserController().handle);
// Obtendo detalhes do usuário
// Criando também um middleware para verificar se o token do usuário está correto
router.get('/userinfo', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
// --------------------------------------------------- Rotas CATEGORY --------------------------------------------//
// Cadastrando nova categoria de produto
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
// Listando nova categoria de produto
router.get('/category', isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
// --------------------------------------------------- Rotas PRODUCT ---------------------------------------------//
// Cadastrando novo produto
router.post('/product', isAuthenticated_1.isAuthenticated, upload.single('file'), new CreateProductController_1.CreateProductController().handle);
// Listando produto por categoria
router.get('/category/product', isAuthenticated_1.isAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
// --------------------------------------------------- Rotas ORDER -----------------------------------------------//
// Criando novo pedido
router.post('/order', isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
// Excluindo pedido
router.delete('/order', isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
// Adicionando itens ao pedido
router.post('/order/item', isAuthenticated_1.isAuthenticated, new AddItemController_1.AddItemController().handle);
// Removendo itens do pedido
router.delete('/order/remove', isAuthenticated_1.isAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
// Enviando pedido a cozinha
router.put('/order/send', isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
// Listando pedidos da cozinha
router.get('/orders', isAuthenticated_1.isAuthenticated, new ListOrderController_1.ListOrderController().handle);
// Listando detalhes dos pedidos
router.get('/order/detail', isAuthenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
// Finalizando pedidos para o status true
router.put('/order/finish', isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
