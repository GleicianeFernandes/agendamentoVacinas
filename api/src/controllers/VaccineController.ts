import Vaccine from '../models/Vaccine'

import { Request, Response } from 'express'

export default class VaccineController {
    static async getVaccine(req : Request, res: Response) {
        try {
            const id = req.params.id;
            const foundVaccine = await Vaccine.findOne({ _id: id }).exec();
            if (!foundVaccine) {
                return res.status(404).json({ message: "Vaccine not found" });
            }
            return res.status(200).json({ vaccine: foundVaccine });
        } catch (err : any) {
            return res.status(500).json({ message: err.message });
        }
    }


    static async getAllVaccine(req : Request, res: Response) {
        try {
            const vaccines = await Vaccine.find().exec();
            return res.status(200).json({ vaccines });
        } catch (err : any) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async getOneName(req : Request, res: Response) {
        try {
            const {nameVaccine} = req.params;
            const vaccines = await Vaccine.findOne({ vaccineName: nameVaccine }).exec();
            if (vaccines === null) {
                return res.status(200).json([]);
              }
        
              res.status(200).json([vaccines]);
        } catch (err : any) {
            return res.status(500).json({ message: err.message });
        }
    }


    static async createVaccine(req : Request, res: Response) {
        try {
            const vaccine = req.body;
            const newVaccine = await Vaccine.create(vaccine);
            return res.status(201).json({ vaccine: newVaccine });
        } catch (err : any) {
            return res.status(500).json({ message: err.message });
        }
    }
}