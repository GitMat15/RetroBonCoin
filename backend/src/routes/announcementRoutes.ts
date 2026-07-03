import { Router } from "express";
import { AnnouncementController } from "../controllers/AnnouncementController";

export function createAnnouncementRoutes(
    controller: AnnouncementController
): Router {

    const router = Router();

    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);

    return router;
}