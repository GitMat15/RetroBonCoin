import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {

    constructor(
        private userService: UserService
    ) {}

    getAll = (req: Request, res: Response): void => {
        res.json(this.userService.getAll());
    };

    getById = (req: Request, res: Response): void => {
        const id = Number(req.params.id);

        const user = this.userService.getById(id);

        if (!user) {
            res.status(404).json({
                message: "Utilisateur introuvable"
            });
            return;
        }

        res.json(user);
    };
}