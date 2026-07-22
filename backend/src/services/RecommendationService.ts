import { Announcement } from "../models/Announcement";
import { Favorite } from "../models/Favorite";
import { BarycenterScoringStrategy } from "./scoring/BarycenterScoringStrategy";

export class RecommendationService {

    private strategy =
        new BarycenterScoringStrategy();

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

        if (favoriteAnnouncements.length === 0) {
            return [];
        }

        const profile = this.buildProfile(
            favoriteAnnouncements
        );

        return announcements
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

        const condition =
            favorites.reduce(
                (sum, item) =>
                    sum + item.condition,
                0
            ) / count;

        const popularity =
            favorites.reduce(
                (sum, item) =>
                    sum + item.popularity,
                0
            ) / count;

        const rarity =
            favorites.reduce(
                (sum, item) =>
                    sum + item.rarity,
                0
            ) / count;

        const quality =
            favorites.reduce(
                (sum, item) =>
                    sum + item.quality,
                0
            ) / count;

        return [
            condition,
            popularity,
            rarity,
            quality
        ];
    }
}