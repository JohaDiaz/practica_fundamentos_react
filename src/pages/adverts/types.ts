export interface Advert {
    id: string;
    name: string;
    owner?: string;
    sale: boolean;
    price: number;
    tags: Tag[];
    photo?: string;
}


export type Tag = "lifestyle" | "mobile" | "motor" | "work";
