import { RequestHandler, Router } from "express";
import { ClientController } from "../controllers/clientController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const clientRoutes = Router();

const clientController = new ClientController();

clientRoutes.use(ensureAuthenticated as RequestHandler);

clientRoutes.post("/client", clientController.create);
clientRoutes.get("/client", clientController.index);
clientRoutes.get("/client/:id", clientController.show);
clientRoutes.put("/client/:id", clientController.update);
clientRoutes.delete("/client/:id", clientController.delete);

export { clientRoutes };
