export class NormalizationService {

    static normalize(
        value: number,
        min: number,
        max: number
    ): number {

        return (
            value - min
        ) / (
            max - min
        );
    }

}