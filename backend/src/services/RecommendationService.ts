import { Announcement } from "../models/Announcement";
import { Favorite } from "../models/Favorite";

import { IScoringStrategy }
from "./scoring/IScoringStrategy";

export class RecommendationService {

    constructor(
        private strategy: IScoringStrategy
    ) {}

    getRecommendations(
        announcements: Announcement[],
        favorites: Favorite[]
    ) {

        const favoriteAnnouncements =
            announcements.filter(
                announcement =>
                    favorites.some(
                        favorite =>
                            favorite.announcementId ===
                            announcement.id
                    )
            );

        if (
            favoriteAnnouncements.length === 0
        ) {
            return [];
        }

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

        const count =
            favorites.length;

        return [
            favorites.reduce(
                (sum, item) =>
                    sum + item.condition,
                0
            ) / count,

            favorites.reduce(
                (sum, item) =>
                    sum + item.popularity,
                0
            ) / count,

            favorites.reduce(
                (sum, item) =>
                    sum + item.rarity,
                0
            ) / count,

            favorites.reduce(
                (sum, item) =>
                    sum + item.quality,
                0
            ) / count
        ];
    }
}