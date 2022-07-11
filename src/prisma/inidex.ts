import { PrismaClient } from '@prisma/client';


// Com o prismaClient conseguiremos acessar os Models do nosso banco de dados, todos os usuários além do CRUD do mesmo.
const prismaClient = PrismaClient();

export default prismaClient;
