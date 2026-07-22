import { IScoringStrategy } from "./IScoringStrategy";
import { BarycenterScoringStrategy } from "./BarycenterScoringStrategy";

export class ScoringStrategyFactory {

    static create(): IScoringStrategy {
        return new BarycenterScoringStrategy();
    }

}