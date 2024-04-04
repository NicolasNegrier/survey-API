import { Router } from "express";

import { getAllWorkers, getWorkerById, createWorker, updateWorker, deleteWorker, getAllWorkersByDay } from "../controllers/worker.controller";

const workerRouter = Router()

workerRouter.get('/', getAllWorkers);
workerRouter.get('/day/:id', getAllWorkersByDay);
workerRouter.get('/:id', getWorkerById);
workerRouter.put('/', createWorker);
workerRouter.patch('/:id', updateWorker);
workerRouter.delete('/:id', deleteWorker);

export default workerRouter;