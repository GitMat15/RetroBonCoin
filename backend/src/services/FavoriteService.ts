import { Favorite } from "../models/Favorite";
import { IFavoriteRepository } from "../repositories/interfaces/IFavoriteRepository";

export class FavoriteService {

    constructor(
        private repository: IFavoriteRepository
    ) {}

    getAll(): Favorite[] {
        return this.repository.findAll();
    }

    addFavorite(favorite: Favorite): void {
        this.repository.add(favorite);
    }

    deleteFavorite(id: number): void {
        this.repository.delete(id);
    }
}