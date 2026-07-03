import app from "./app";

import { AnnouncementController } from "./controllers/AnnouncementController";
import { InMemoryAnnouncementRepository } from "./repositories/memory/InMemoryAnnouncementRepository";
import { AnnouncementService } from "./services/AnnouncementService";
import { UserController } from "./controllers/UserController";
import { UserService } from "./services/UserService";
import { InMemoryUserRepository } from "./repositories/memory/InMemoryUserRepository";
import { FavoriteController } from "./controllers/FavoriteController";
import { FavoriteService } from "./services/FavoriteService";
import { InMemoryFavoriteRepository } from "./repositories/memory/InMemoryFavoriteRepository";
import { AuthController } from "./controllers/AuthController";
import { AuthService } from "./services/AuthService";


const repository = new InMemoryAnnouncementRepository();
const service = new AnnouncementService(repository);
const controller = new AnnouncementController(service);
const userRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const favoriteRepository = new InMemoryFavoriteRepository();
const favoriteService = new FavoriteService(favoriteRepository);
const favoriteController = new FavoriteController(favoriteService);
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);


app.get("/", (req, res) => {res.send("RetroBonCoin API");});
app.get("/announcements", controller.getAll);
app.get("/announcements/:id", controller.getById);
app.get("/users", userController.getAll);
app.get("/users/:id", userController.getById);
app.get("/favorites",favoriteController.getAll);
app.post("/favorites",favoriteController.addFavorite);
app.delete("/favorites/:id",favoriteController.deleteFavorite);
app.post("/auth/register",authController.register);
app.post("/auth/login",authController.login);


const PORT = 3000;

app.listen(PORT, () => {console.log(`Serveur lancé sur http://localhost:${PORT}`);});