import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";

const workerClient = new PrismaClient().worker;

// getAllWorkers
export const getAllWorkers = async (req: Request , res: Response) => {
    try {
        const allWorkers = await workerClient.findMany();

        res.status(200).json({ data: allWorkers })
    }catch (e) {
        console.log(e)
    }
}

// getAllWorkersByDay
export const getAllWorkersByDay = async (req: Request , res: Response) => {
    const dayId = req.params.id
    try {
        const allWorkersInDay = await workerClient.findMany({
            include: {
                Plannings: true,
            }
        });

        res.status(200).json({ data: allWorkersInDay })
    }catch (e) {
        console.log(e)
    }
}

// getWorkerById
export const getWorkerById = async (req: Request , res: Response) => {
    try {
        const workerId = req.params.id
        const worker = await workerClient.findUnique({
            include: {
                Plannings: true,
            },
            where: {
                id: workerId
            }
        });

        res.status(200).json({ data: worker })
    }catch (e) {
        console.log(e)
    }
}

// createWorker
export const createWorker = async (req: Request , res: Response) => {
    try {
        const { first_name, last_name } = req.body
        console.log(first_name)
        const worker = await workerClient.create({
            data: {
                created_at: new Date(),
                first_name,
                last_name
            }
        })

        res.status(201).json({ data: worker })
    }catch (e) {
        console.log(e)
    }
}

// updateWorker
export const updateWorker = async (req: Request, res: Response) => {
    try {
        const workerId = req.params.id;
        const { first_name, last_name} = req.body
        const worker = await workerClient.update({
            where: {
                id: workerId,
            },
            data: {
                first_name,
                last_name
            }
        })

        res.status(200).json({ data: worker })
    }catch (e) {
        console.log(e)
    }
}

// deleteWorker
export const deleteWorker = async (req: Request, res: Response) => {
    try {
        const workerId = req.params.id;
        const worker = await workerClient.delete({
            where: {
                id: workerId
            }
        });

        res.status(200).json({ data: {}})
    }catch (e) {
        console.log(e)
    }
}