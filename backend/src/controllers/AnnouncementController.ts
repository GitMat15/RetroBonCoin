import { Request, Response } from "express";
import { AnnouncementService } from "../services/AnnouncementService.js";

export class AnnouncementController {
    constructor(
        private announcementService: AnnouncementService
    ) {}

    getAll = (req: Request, res: Response): void => {
        const announcements = this.announcementService.getAll();

        res.status(200).json(announcements);
    };

    getById = (req: Request, res: Response): void => {
        const id = Number(req.params.id);

        const announcement = this.announcementService.getById(id);

        if (!announcement) {
            res.status(404).json({
                message: "Annonce introuvable"
            });
            return;
        }

        res.status(200).json(announcement);
    };
}