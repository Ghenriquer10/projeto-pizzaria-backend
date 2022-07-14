import prismaClient from '../../prisma'
import { hash } from 'bcryptjs';

// É nos services onde fica toda a lógica para como o BD

interface UserRequest {
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        // Verificar se email enviado
        if (!email) {
            throw new Error("Email incorrect!")
        }

        // Verificando se o email já existe no banco de dados:
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        // Cadastrando no banco de dados com senha criptografada

        const passwordHash = await hash(password, 8);
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }
}

export { CreateUserService }