import { Announcement } from "../../models/Announcement";

export interface IAnnouncementRepository {
    findAll(): Announcement[];
    findById(id: number): Announcement | undefined;
}