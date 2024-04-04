import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";

const dayClient = new PrismaClient().day;
const workerDayClient = new PrismaClient().workers_Days;

// getAllDays
export const getAllDays = async (req: Request , res: Response) => {
    try {
        const allDays = await dayClient.findMany();

        res.status(200).json({ data: allDays })
    }catch (e) {
        console.log(e)
    }
}

// getAllDaysByWorker
export const getAllDaysByWorker = async (req: Request , res: Response) => {
    try {
        const workerId = req.params.id
        const allDays = await workerDayClient.findMany({
            where: {
                worker_id: workerId
                }
        });

        res.status(200).json({ data: allDays })
    }catch (e) {
        console.log(e)
    }
}

// getDayById
export const getDayById = async (req: Request , res: Response) => {
    try {
        const dayId = req.params.id
        const day = await dayClient.findUnique({
            include: {
                Plannings: true,
            },
            where: {
                id: dayId
            }
        });

        res.status(200).json({ data: day })
    }catch (e) {
        console.log(e)
    }
}

// createDay
export const createDay = async (req: Request , res: Response) => {
    try {
        const { date } = req.body
        const day = await dayClient.create({
            data: {
                created_at: new Date(),
                date
            }
        })

        res.status(201).json({ data: day })
    }catch (e) {
        console.log(e)
    }
}

// updateDay
export const updateDay = async (req: Request, res: Response) => {
    try {
        const dayId = req.params.id;
        const dayData = req.body
        const day = await dayClient.update({
            where: {
                id: dayId,
            },
            data: dayData
        })

        res.status(200).json({ data: day })
    }catch (e) {
        console.log(e)
    }
}

// deleteDay
export const deleteDay = async (req: Request, res: Response) => {
    try {
        const dayId = req.params.id;
        const day = await dayClient.delete({
            where: {
                id: dayId
            }
        });

        res.status(200).json({ data: {}})
    }catch (e) {
        console.log(e)
    }
}