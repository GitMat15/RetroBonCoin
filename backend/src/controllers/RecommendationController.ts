import { Request, Response } from "express";

import { announcements } from "../data/announcements";

import { RecommendationService } from "../services/RecommendationService";
import { BarycenterScoringStrategy } from "../services/scoring/BarycenterScoringStrategy";

export class RecommendationController {

    private service =
        new RecommendationService(
            new BarycenterScoringStrategy()
        );

    getRecommendations = (
        req: Request,
        res: Response
    ) => {

        const favorites = req.body;

        const recommendations =
            this.service.getRecommendations(
                announcements,
                favorites
            );

        res.json(recommendations);
    };
}