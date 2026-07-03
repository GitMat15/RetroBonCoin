import { Announcement } from "../models/Announcement";

export const announcements: Announcement[] = [
    {
        id: 1,
        title: "PS5 Slim",
        description: "Très bon état",
        type: "Console",
        platform: "PS5",
        price: 400,
        createdAt: new Date()
    },
    {
        id: 2,
        title: "Zelda Tears of the Kingdom",
        description: "Version Switch",
        type: "Jeu",
        platform: "Nintendo Switch",
        price: 45,
        createdAt: new Date()
    }
];