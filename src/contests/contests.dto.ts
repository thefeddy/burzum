
export class ContestDTO {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly prize: number;
    readonly winner: string;
    readonly buy_in: number;
    readonly date: Date;
}