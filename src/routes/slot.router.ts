import { Router } from "express";

import { getAllSolts, getSlotById, createSlot, updateSlot, deleteSlot } from "../controllers/slot.controller";

const slotRouter = Router()

slotRouter.get('/', getAllSolts);
slotRouter.get('/:id', getSlotById);
slotRouter.put('/', createSlot);
slotRouter.patch('/:id', updateSlot);
slotRouter.delete('/:id', deleteSlot);

export default slotRouter;