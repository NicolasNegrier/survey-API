import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";

const planningClient = new PrismaClient().planning;

// getAllPlannings
export const getAllPlannings = async (req: Request , res: Response) => {
    try {
        const allPlannings = await planningClient.findMany({
            include: {
                Day: true,
                Worker: true,
                Service: true,
                Slot: true
            }
        });

        res.status(200).json({ data: allPlannings })
    }catch (e) {
        console.log(e)
    }
}

// getPlanningById
export const getPanningById = async (req: Request , res: Response) => {
    try {
        const planningId = req.params.id
        const planning = await planningClient.findUnique({
            include: {
                Day: true,
                Worker: true,
                Service: true,
                Slot: true
            },
            where: {
                id: planningId
            }
        });

        res.status(200).json({ data: planning })
    }catch (e) {
        console.log(e)
    }
}

// getPlanningByDay
export const getPlanningByDay = async (req: Request , res: Response) => {
    try {
        const dayId = req.params.id
        const planning = await planningClient.findMany({
            include: {
                Day: true,
                Worker: true,
                Service: true,
                Slot: true
            },
            where: {
                day_id: dayId
            }
        });

        res.status(200).json({ data: planning })
    }catch (e) {
        console.log(e)
    }
}

// getPlanningBySlot
export const getPlanningBySlot = async (req: Request , res: Response) => {
    try {
        const slotId = req.params.id
        console.log(req.params)
        const planning = await planningClient.findMany({
            include: {
                Day: true,
                Worker: true,
                Service: true,
                Slot: true
            },
            where: {
                slot_id: slotId,
                // day_id:
            }
        });

        res.status(200).json({ data: planning })
    }catch (e) {
        console.log(e)
    }
}

// createDay
export const createPlanning = async (req: Request , res: Response) => {
    try {
        const { day_id, service_id, worker_id, slot_id } = req.body
        console.log(req.body);
        const day = await planningClient.create({
            data: {
                created_at: new Date(),
                day_id,
                service_id,
                worker_id,
                slot_id
            }
        })

        res.status(201).json({ data: day })
    }catch (e) {
        console.log(e)
    }
}

// updateDay
export const updatePlanning = async (req: Request, res: Response) => {
    try {
        const planningId = req.params.id;
        const { day_id, service_id, worker_id, slot_id } = req.body

        // Vérifier les datas

        const day = await planningClient.update({
            where: {
                id: planningId,
            },
            data: {
                updated_at: new Date(),
                day_id,
                service_id,
                worker_id,
                slot_id
            }
        })

        res.status(200).json({ data: day })
    }catch (e) {
        console.log(e)
    }
}

// deleteDay
export const deletePlanning = async (req: Request, res: Response) => {
    try {
        const planningId = req.params.id;
        const planning = await planningClient.delete({
            where: {
                id: planningId
            }
        });

        res.status(200).json({ data: {}})
    }catch (e) {
        console.log(e)
    }
}