import { User } from "../../models/User";
import { IUserRepository } from "../interfaces/IUserRepository";
import { prisma } from "../../prisma/clients";

export class PrismaUserRepository implements IUserRepository {

    async findAll(): Promise<User[]> {
        return prisma.user.findMany();
    }

    async findById(id: number): Promise<User | undefined> {
        const user = await prisma.user.findUnique({
            where: { id }
        });

        return user ?? undefined;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        return user ?? undefined;
    }
}