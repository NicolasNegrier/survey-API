import { Router } from "express";

import { getAllServices, getServiceById, createService, updateService, deleteService } from "../controllers/service.controller";

const dayRouter = Router()

dayRouter.get('/', getAllServices);
dayRouter.get('/:id', getServiceById);
dayRouter.put('/', createService);
dayRouter.patch('/:id', updateService);
dayRouter.delete('/:id', deleteService);

export default dayRouter;