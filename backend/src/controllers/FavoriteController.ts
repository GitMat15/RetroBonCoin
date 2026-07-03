import { Request, Response } from "express";
import { FavoriteService } from "../services/FavoriteService";

export class FavoriteController {

    constructor(
        private favoriteService: FavoriteService
    ) {}

    getAll = (req: Request, res: Response): void => {
        res.json(
            this.favoriteService.getAll()
        );
    };

    addFavorite = (req: Request, res: Response): void => {

        const favorite = req.body;

        this.favoriteService.addFavorite(
            favorite
        );

        res.status(201).json({
            message: "Favori ajouté"
        });
    };

    deleteFavorite = (
        req: Request,
        res: Response
    ): void => {

        const id = Number(req.params.id);

        this.favoriteService.deleteFavorite(id);

        res.status(200).json({
            message: "Favori supprimé"
        });
    };
}