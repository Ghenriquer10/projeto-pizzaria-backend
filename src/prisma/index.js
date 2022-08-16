"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// Com o prismaClient conseguiremos acessar os Models do nosso banco de dados, todos os usuários além do CRUD do mesmo.
const prismaClient = new client_1.PrismaClient();
exports.default = prismaClient;
