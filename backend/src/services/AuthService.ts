import { User } from "../models/User";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

export class AuthService {

    constructor(
        private userRepository: IUserRepository
    ) {}

    register(user: User): User {

        const existingUser =
            this.userRepository.findByEmail(
                user.email
            );

        if (existingUser) {
            throw new Error(
                "Utilisateur déjà existant"
            );
        }

        return user;
    }

    login(
        email: string,
        password: string
    ): User | undefined {

        const user =
            this.userRepository.findByEmail(
                email
            );

        if (!user) {
            return undefined;
        }

        if (user.password !== password) {
            return undefined;
        }

        return user;
    }
}