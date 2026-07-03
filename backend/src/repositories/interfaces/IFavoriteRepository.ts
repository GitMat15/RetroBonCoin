import { Favorite } from "../../models/Favorite";

export interface IFavoriteRepository {
    findAll(): Favorite[];
    add(favorite: Favorite): void;
}