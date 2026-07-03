import { User } from "../../models/User";

export interface IUserRepository {
    findAll(): User[];
    findById(id: number): User | undefined;
    findByEmail(email: string): User | undefined;
}