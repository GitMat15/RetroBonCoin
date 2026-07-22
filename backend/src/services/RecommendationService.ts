import { Announcement } from "../models/Announcement";
import { Favorite } from "../models/Favorite";

import { IScoringStrategy } from "./scoring/IScoringStrategy";

export class RecommendationService {

    private static instance: RecommendationService;

    private constructor(
        private strategy: IScoringStrategy
    ) {}

    static getInstance(
        strategy: IScoringStrategy
    ): RecommendationService {

        if (!RecommendationService.instance) {

            RecommendationService.instance =
                new RecommendationService(
                    strategy
                );
        }

        return RecommendationService.instance;
    }

    getRecommendations(
        announcements: Announcement[],
        favorites: Favorite[] = []
    ) {

        if (favorites.length === 0) {
            return [];
        }

        const favoriteAnnouncements =
            announcements.filter(
                announcement =>
                    favorites.some(
                        favorite =>
                            favorite.announcementId ===
                            announcement.id
                    )
            );

        const profile =
            this.buildProfile(
                favoriteAnnouncements
            );

        const filteredAnnouncements =
            announcements.filter(
                announcement =>
                    announcement.price <= 500
            );

        return filteredAnnouncements
            .map(announcement => ({
                announcement,
                score:
                    this.strategy.calculateScore(
                        announcement,
                        profile
                    )
            }))
            .sort(
                (a, b) =>
                    b.score - a.score
            );
    }

    private buildProfile(
        favorites: Announcement[]
    ): number[] {

        const count = favorites.length;

        return [

            favorites.reduce(
                (sum, item) =>
                    sum + item.condition / 10,
                0
            ) / count,

            favorites.reduce(
                (sum, item) =>
                    sum + item.popularity / 10,
                0
            ) / count,

            favorites.reduce(
                (sum, item) =>
                    sum + item.rarity / 10,
                0
            ) / count,

            favorites.reduce(
                (sum, item) =>
                    sum + item.quality / 10,
                0
            ) / count

        ];
    }
}