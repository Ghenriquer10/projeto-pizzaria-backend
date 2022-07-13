import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService';

// É através do crontoller onde é chamado as principais requisições no banco de dados

class CreateUserCrontroller {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            password
        });

        return res.json(user)
    }
}

export { CreateUserCrontroller };