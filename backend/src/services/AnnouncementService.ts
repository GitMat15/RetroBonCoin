import { Announcement } from "../models/Announcement";
import { IAnnouncementRepository } from "../repositories/interfaces/IAnnouncementRepository";

export class AnnouncementService {

    constructor(
        private repository: IAnnouncementRepository
    ) {}

    getAll(): Announcement[] {
        return this.repository.findAll();
    }

    getById(id: number): Announcement | undefined {
        return this.repository.findById(id);
    }
}