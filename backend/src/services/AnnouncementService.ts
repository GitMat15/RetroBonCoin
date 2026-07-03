import { Announcement } from "../models/Announcement";
import { IAnnouncementRepository } from "../repositories/interfaces/IAnnouncementRepository";

export class AnnouncementService {

    constructor(
        private repository: IAnnouncementRepository
    ) {}

    getAll(
        platform?: string,
        maxPrice?: number,
        type?: string
    ): Announcement[] {

        let announcements = this.repository.findAll();

        if (platform) {
            announcements = announcements.filter(
                a => a.platform === platform
            );
        }

        if (maxPrice) {
            announcements = announcements.filter(
                a => a.price <= maxPrice
            );
        }

        if (type) {
            announcements = announcements.filter(
                a => a.type === type
            );
        }

        return announcements;
    }

    getById(id: number): Announcement | undefined {
        return this.repository.findById(id);
    }
}