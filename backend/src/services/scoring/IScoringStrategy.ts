import { Announcement } from "../../models/Announcement";

export interface IScoringStrategy {
    calculateScore(
        announcement: Announcement,
        profile: number[]
    ): number;
}