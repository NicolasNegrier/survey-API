import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";

const slotClient = new PrismaClient().slot;

// getAllSlots
export const getAllSolts = async (req: Request , res: Response) => {
    try {
        const allSlots = await slotClient.findMany({
            include: {
                Plannings: true
            },
            orderBy: {
                created_at: "asc"
            }
        });

        res.status(200).json({ data: allSlots })
    }catch (e) {
        console.log(e)
    }
}

// getSlotById
export const getSlotById = async (req: Request , res: Response) => {
    try {
        const slotId = req.params.id
        const slot = await slotClient.findUnique({
            include: {
                Plannings: true,
            },
            where: {
                id: slotId
            }
        });

        res.status(200).json({ data: slot })
    }catch (e) {
        console.log(e)
    }
}

// createSlot
export const createSlot = async (req: Request , res: Response) => {
    try {
        const { name } = req.body
        const slot = await slotClient.create({
            data: {
                created_at: new Date(),
                name
            }
        })

        res.status(201).json({ data: slot })
    }catch (e) {
        console.log(e)
    }
}

// updateSlot
export const updateSlot = async (req: Request, res: Response) => {
    try {
        const slotId = req.params.id;
        const { name } = req.body
        const day = await slotClient.update({
            where: {
                id: slotId,
            },
            data: {
                name
            }
        })

        res.status(200).json({ data: day })
    }catch (e) {
        console.log(e)
    }
}

// deleteSlot
export const deleteSlot = async (req: Request, res: Response) => {
    try {
        const slotId = req.params.id;
        const slot = await slotClient.delete({
            where: {
                id: slotId
            }
        });

        res.status(200).json({ data: {}})
    }catch (e) {
        console.log(e)
    }
}