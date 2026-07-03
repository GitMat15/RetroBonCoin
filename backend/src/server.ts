import app from "./app.js";

import { AnnouncementController } from "./controllers/AnnouncementController.js";
import { InMemoryAnnouncementRepository } from "./repositories/memory/InMemoryAnnouncementRepository.js";
import { AnnouncementService } from "./services/AnnouncementService.js";

const repository = new InMemoryAnnouncementRepository();
const service = new AnnouncementService(repository);
const controller = new AnnouncementController(service);

app.get("/announcements", controller.getAll);
app.get("/announcements/:id", controller.getById);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});