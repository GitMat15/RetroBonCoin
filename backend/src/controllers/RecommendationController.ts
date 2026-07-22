import { Request, Response } from "express";

import { announcements } from "../data/announcements";

import { RecommendationService } from "../services/RecommendationService";
import { ScoringStrategyFactory } from "../services/scoring/ScoringStrategyFactory";

export class RecommendationController {

    private service =
        RecommendationService.getInstance(
            ScoringStrategyFactory.create()
        );

    getRecommendations = (
        req: Request,
        res: Response
    ) => {

        const favorites =
            req.body ?? [];

        const recommendations =
            this.service.getRecommendations(
                announcements,
                favorites
            );

        res.json(recommendations);
    };
}