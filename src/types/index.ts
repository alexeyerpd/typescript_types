export interface Buyable {
    readonly id: number;
    readonly name: string;
    readonly price: number;
}

export interface Viewable {
    readonly id: number;
    readonly title: string;
    readonly subtitle: string;
}