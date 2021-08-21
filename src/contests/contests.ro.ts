import { ContestantRO } from "src/contestants/contestants.ro";
export class ContestRO {
    id: number;
    name: string;
    description: string;
    prize: number;
    winner: string;
    buy_in: number;
    date: Date;
    contestants: ContestantRO
}