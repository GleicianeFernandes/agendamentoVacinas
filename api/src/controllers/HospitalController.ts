import Hospital from '../models/Hospital'

import { Request, Response } from 'express'

export default class HospitalController {
    static async getAllHospital(req : Request, res: Response) {
        try {
            const hospital = await Hospital.find().exec();
            return res.status(200).json({ hospital });
        } catch (err : any) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async createHospital(req : Request, res: Response) {
        try {
            const hospital = req.body;
            const newHospital = await Hospital.create(hospital);
            return res.status(201).json({ vaccine: newHospital });
        } catch (err : any) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async updateHospital(req : Request, res: Response) {
        try {
            const hospital = req.body;
            const upHospital = await Hospital.updateOne({ _id: hospital._id }, { $set: hospital });
            return res.status(201).json({ vaccine: upHospital });
        } catch (err : any) {
            return res.status(500).json({ message: err.message });
        }
    }
}