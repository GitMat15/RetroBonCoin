import { Router } from "express";
import { RecommendationController } from "../controllers/RecommendationController";

export function createRecommendationRoutes(
    recommendationController: RecommendationController
): Router {

    const router = Router();

    router.post(
        "/",
        recommendationController.getRecommendations
    );

    return router;
}