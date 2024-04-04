import { Router } from "express";

import { getAllDays, getDayById, createDay, updateDay, deleteDay, getAllDaysByWorker } from "../controllers/day.controller";

const dayRouter = Router()

dayRouter.get('/', getAllDays);
dayRouter.get('/worker/:id', getAllDaysByWorker)
dayRouter.get('/:id', getDayById);
dayRouter.put('/', createDay);
dayRouter.patch('/:id', updateDay);
dayRouter.delete('/:id', deleteDay);

export default dayRouter;