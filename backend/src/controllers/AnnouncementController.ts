import { Request, Response } from "express";
import { AnnouncementService } from "../services/AnnouncementService.js";

export class AnnouncementController {
    constructor(
        private announcementService: AnnouncementService
    ) {}

    getAll = (req: Request, res: Response): void => {

        const platform = req.query.platform as string;

        const maxPrice = req.query.maxPrice
            ? Number(req.query.maxPrice)
            : undefined;

        const type = req.query.type as string;

        const sort = req.query.sort as string;

        const announcements =
            this.announcementService.getAll(
                platform,
                maxPrice,
                type,
            );

        res.status(200).json(announcements);
    };

    getById = (req: Request, res: Response): void => {

        const id = Number(req.params.id);

        const announcement =
            this.announcementService.getById(id);

        if (!announcement) {
            res.status(404).json({
                message: "Annonce introuvable"
            });
            return;
        }

        res.status(200).json(announcement);
    };
}