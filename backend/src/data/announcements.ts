import { Announcement } from "../models/Announcement";

export const announcements: Announcement[] = [
    {
        id: 1,
        title: "PS5 Slim",
        description: "Très bon état",
        type: "Console",
        platform: "PS5",
        price: 400,
        createdAt: new Date(),
        condition: 9,
        popularity: 10,
        rarity: 5,
        quality: 9
    },

    {
        id: 2,
        title: "Nintendo GameCube",
        description: "Console collector",
        type: "Console",
        platform: "Nintendo",
        price: 150,
        createdAt: new Date(),
        condition: 7,
        popularity: 6,
        rarity: 9,
        quality: 8
    },

    {
        id: 3,
        title: "Xbox Series X",
        description: "Très bon état",
        type: "Console",
        platform: "Xbox",
        price: 450,
        createdAt: new Date(),
        condition: 10,
        popularity: 8,
        rarity: 4,
        quality: 9
    },

    {
        id: 4,
        title: "Nintendo Switch OLED",
        description: "Comme neuve",
        type: "Console",
        platform: "Nintendo",
        price: 280,
        createdAt: new Date(),
        condition: 9,
        popularity: 9,
        rarity: 5,
        quality: 9
    },

    {
        id: 5,
        title: "Pokémon Émeraude",
        description: "Version GameBoy Advance",
        type: "Jeu",
        platform: "GBA",
        price: 120,
        createdAt: new Date(),
        condition: 8,
        popularity: 8,
        rarity: 10,
        quality: 8
    },

    {
        id: 6,
        title: "The Legend of Zelda Twilight Princess",
        description: "Version GameCube",
        type: "Jeu",
        platform: "GameCube",
        price: 90,
        createdAt: new Date(),
        condition: 8,
        popularity: 9,
        rarity: 8,
        quality: 8
    },

    {
        id: 7,
        title: "Mario Kart 8 Deluxe",
        description: "Version Switch",
        type: "Jeu",
        platform: "Nintendo Switch",
        price: 35,
        createdAt: new Date(),
        condition: 10,
        popularity: 10,
        rarity: 2,
        quality: 9
    },

    {
        id: 8,
        title: "PlayStation Vita",
        description: "Pack complet",
        type: "Console",
        platform: "PlayStation",
        price: 180,
        createdAt: new Date(),
        condition: 8,
        popularity: 6,
        rarity: 8,
        quality: 8
    },

    {
        id: 9,
        title: "Steam Deck",
        description: "512 Go",
        type: "Console",
        platform: "PC",
        price: 500,
        createdAt: new Date(),
        condition: 9,
        popularity: 8,
        rarity: 6,
        quality: 10
    },

    {
        id: 10,
        title: "Chrono Trigger",
        description: "Version Super Nintendo",
        type: "Jeu",
        platform: "SNES",
        price: 200,
        createdAt: new Date(),
        condition: 7,
        popularity: 8,
        rarity: 10,
        quality: 9
    }
];