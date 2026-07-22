import { Announcement } from "../../models/Announcement";
import { IScoringStrategy } from "./IScoringStrategy";

export class BarycenterScoringStrategy
    implements IScoringStrategy {

    calculateScore(
        announcement: Announcement,
        profile: number[]
    ): number {

        const distance = Math.sqrt(
            Math.pow(
                announcement.condition - profile[0],
                2
            ) +
            Math.pow(
                announcement.popularity - profile[1],
                2
            ) +
            Math.pow(
                announcement.rarity - profile[2],
                2
            ) +
            Math.pow(
                announcement.quality - profile[3],
                2
            )
        );

        return 1 / (1 + distance);
    }
}