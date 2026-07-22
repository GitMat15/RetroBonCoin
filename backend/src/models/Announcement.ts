export interface Announcement {
    id: number;
    title: string;
    description: string;
    type: "Jeu" | "Console";
    platform: string;
    price: number;
    createdAt: Date;

    condition: number;
    popularity: number;
    rarity: number;
    quality: number;
}