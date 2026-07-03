import { Router } from "express";
import { UserController } from "../controllers/UserController";

export function createUserRoutes(
    userController: UserController
): Router {

    const router = Router();

    router.get("/", userController.getAll);
    router.get("/:id", userController.getById);

    return router;
}