import { users } from "../../data/users";
import { User } from "../../models/User";
import { IUserRepository } from "../interfaces/IUserRepository";

export class InMemoryUserRepository implements IUserRepository {

    findAll(): User[] {
        return users;
    }

    findById(id: number): User | undefined {
        return users.find(user => user.id === id);
    }

    findByEmail(email: string): User | undefined {
        return users.find(user => user.email === email);
    }
}