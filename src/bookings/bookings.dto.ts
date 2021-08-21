export class BookingsDTO {
    readonly id: number;
    readonly name: string;
    readonly staff: number;
    readonly start: Date;
    readonly end: Date;
    readonly event: number;
    readonly room: number;
    readonly price: number;
}