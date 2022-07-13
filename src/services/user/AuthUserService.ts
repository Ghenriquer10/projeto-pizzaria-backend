import prismaClient from "../../prisma/inidex";
import { compare } from 'bcryptjs';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        // Verificar se email exite
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("User/password incorrect!")
        }

        // Verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) {
            throw new Error("User/password incorrect!")
        }

        return { ok: true }
    }
}

export { AuthUserService }