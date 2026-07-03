import { Router } from "express";
import { FavoriteController } from "../controllers/FavoriteController";

export function createFavoriteRoutes(
    favoriteController: FavoriteController
): Router {

    const router = Router();

    router.get("/", favoriteController.getAll);

    router.post(
        "/",
        favoriteController.addFavorite
    );

    router.delete(
        "/:id",
        favoriteController.deleteFavorite
    );

    return router;
}