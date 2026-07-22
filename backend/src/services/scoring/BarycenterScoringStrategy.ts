import { Announcement } from "../../models/Announcement";
import { IScoringStrategy } from "./IScoringStrategy";
import { NormalizationService } from "../NormalizationService";

export class BarycenterScoringStrategy
implements IScoringStrategy {

    calculateScore(
        announcement: Announcement,
        profile: number[]
    ): number {

        const condition =
            NormalizationService.normalize(
                announcement.condition,
                0,
                10
            );

        const popularity =
            NormalizationService.normalize(
                announcement.popularity,
                0,
                10
            );

        const rarity =
            NormalizationService.normalize(
                announcement.rarity,
                0,
                10
            );

        const quality =
            NormalizationService.normalize(
                announcement.quality,
                0,
                10
            );

        const weightCondition = 1;
        const weightPopularity = 2;
        const weightRarity = 3;
        const weightQuality = 4;

        const distance = Math.sqrt(

            weightCondition *
            Math.pow(
                condition - profile[0],
                2
            )

            +

            weightPopularity *
            Math.pow(
                popularity - profile[1],
                2
            )

            +

            weightRarity *
            Math.pow(
                rarity - profile[2],
                2
            )

            +

            weightQuality *
            Math.pow(
                quality - profile[3],
                2
            )

        );

        return 1 / (1 + distance);
    }
}