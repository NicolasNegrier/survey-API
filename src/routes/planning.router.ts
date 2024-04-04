import { Router } from "express";

import { getAllPlannings, getPanningById, getPlanningByDay, createPlanning, updatePlanning, deletePlanning, getPlanningBySlot } from "../controllers/planning.controller";

const planningRouter = Router()

planningRouter.get('/', getAllPlannings);
planningRouter.get('/:id', getPanningById);
planningRouter.get('/:dayId', getPlanningByDay);
planningRouter.get('/:dayId/:slotId', getPlanningBySlot);
planningRouter.put('/', createPlanning);
planningRouter.patch('/:id', updatePlanning);
planningRouter.delete('/:id', deletePlanning);

export default planningRouter;