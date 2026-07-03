import { favorites } from "../../data/favorites";
import { Favorite } from "../../models/Favorite";
import { IFavoriteRepository } from "../interfaces/IFavoriteRepository";

export class InMemoryFavoriteRepository implements IFavoriteRepository {

    findAll(): Favorite[] {
        return favorites;
    }

    add(favorite: Favorite): void {
        favorites.push(favorite);
    }

    delete(id: number): void {
        const index = favorites.findIndex(
            favorite => favorite.id === id
        );

        if (index !== -1) {
            favorites.splice(index, 1);
        }
    }
}