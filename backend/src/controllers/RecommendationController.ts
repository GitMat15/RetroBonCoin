import { Request, Response } from "express";

import { announcements }
from "../data/announcements";

import { favorites }
from "../data/favorites";

import { RecommendationService }
from "../services/RecommendationService";

export class RecommendationController {

    private service =
        new RecommendationService();

    getRecommendations = (
        req: Request,
        res: Response
    ) => {

        const recommendations =
            this.service.getRecommendations(
                announcements,
                favorites
            );

        res.json(recommendations);
    };
}