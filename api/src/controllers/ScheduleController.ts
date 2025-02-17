import Schedule from '../models/Schedule'
import Vaccine from '../models/Vaccine'

import { Request, Response } from 'express'

export default class ScheduleController {
    static async getSchedulegByUserId(req : Request, res: Response) {
        try{
            const schedules = await Schedule.find({ idUser: req.params.user }).exec()
            res.status(200).json(schedules)
        }catch (err : any) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async createSchedule(req : Request, res: Response) {
        try {
            const schedule = req.body;
            const newSchedule = await Schedule.create(schedule);
            await Vaccine.findByIdAndUpdate(schedule.vaccine, { $inc: { qtd: -1 } });
            return res.status(201).json({ vaccine: newSchedule });
        } catch (err : any) {
            return res.status(500).json({ message: err.message });
        }
    }

    static async deleteSchedule(req : Request, res: Response) {
        try {
            let schedule = await Schedule.findOne({_id : req.params.ScheduleId}).exec()

            if(!schedule) return res.status(404).json({'message': "Schedule not found"})

            await Vaccine.findByIdAndUpdate(schedule.vaccine, { $inc: { qtd: +1 } });
            
            await Schedule.deleteOne({_id : req.params.ScheduleId})

            return res.status(200).json({"message": "Schedule deleted"})
        } catch (err : any) {
            return res.status(500).json({ message: err.message });
        }
    }
}