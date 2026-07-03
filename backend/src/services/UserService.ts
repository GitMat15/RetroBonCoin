import { User } from "../models/User";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

export class UserService {

    constructor(
        private repository: IUserRepository
    ) {}

    getAll(): User[] {
        return this.repository.findAll();
    }

    getById(id: number): User | undefined {
        return this.repository.findById(id);
    }
}