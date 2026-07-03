import { announcements } from "../../data/announcements";
import { Announcement } from "../../models/Announcement";
import { IAnnouncementRepository } from "../interfaces/IAnnouncementRepository";

export class InMemoryAnnouncementRepository implements IAnnouncementRepository {

    findAll(): Announcement[] {
        return announcements;
    }

    findById(id: number): Announcement | undefined {
        return announcements.find(a => a.id === id);
    }
}