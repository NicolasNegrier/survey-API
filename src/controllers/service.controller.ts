import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express-serve-static-core";

const serviceClient = new PrismaClient().service;

// getAllServices
export const getAllServices = async (req: Request , res: Response) => {
    try {
        const allServices = await serviceClient.findMany();

        res.status(200).json({ data: allServices })
    }catch (e) {
        console.log(e)
    }
}

// getServiceById
export const getServiceById = async (req: Request , res: Response) => {
    try {
        const serviceId = req.params.id
        const service = await serviceClient.findUnique({
            include: {
                Plannings: true,
            },
            where: {
                id: serviceId
            }
        });

        res.status(200).json({ data: service })
    }catch (e) {
        console.log(e)
    }
}

// createService
export const createService = async (req: Request , res: Response) => {
    try {
        const { name, color } = req.body
        const service = await serviceClient.create({
            data: {
                created_at: new Date(),
                name,
                color
            }
        })

        res.status(201).json({ data: service })
    }catch (e) {
        console.log(e)
    }
}

// updateDay
export const updateService = async (req: Request, res: Response) => {
    try {
        const serviceId = req.params.id;
        const { name, color } = req.body
        const service = await serviceClient.update({
            where: {
                id: serviceId,
            },
            data: {
                name,
                color
            }
        })

        res.status(200).json({ data: service })
    }catch (e) {
        console.log(e)
    }
}

// deleteService
export const deleteService = async (req: Request, res: Response) => {
    try {
        const serviceId = req.params.id;
        const service = await serviceClient.delete({
            where: {
                id: serviceId
            }
        });

        res.status(200).json({ data: {}})
    }catch (e) {
        console.log(e)
    }
}