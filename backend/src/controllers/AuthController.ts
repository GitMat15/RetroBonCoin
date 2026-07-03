import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    register = (
        req: Request,
        res: Response
    ): void => {

        try {

            const user =
                this.authService.register(
                    req.body
                );

            res.status(201).json(user);

        } catch (error) {

            res.status(400).json({
                message: (error as Error).message
            });
        }
    };

    login = (
        req: Request,
        res: Response
    ): void => {

        const {
            email,
            password
        } = req.body;

        const user =
            this.authService.login(
                email,
                password
            );

        if (!user) {

            res.status(401).json({
                message:
                    "Email ou mot de passe incorrect"
            });

            return;
        }

        res.status(200).json({
            message: "Connexion réussie",
            user
        });
    };
}