import User from "../models/User";
import Vaccine from "../models/Vaccine";
import { Request, Response } from "express";

export interface IVaccineInterface {
  vaccineName: string;
  hospitalName: string;
  address: string;
  day: string;
  hour: string;
  _id: string;
}

export interface IUserInterface {
  name: string;
  email: string;
  cpf?: string;
  schedules?: IVaccineInterface[];
}

export default class UserController {
  static async getUser(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      const foundUser = await User.findOne({ email })
        .populate("schedules")
        .exec();

      if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({ user: foundUser });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const { email, vaccineId, name } = req.body;

      if (!email || !vaccineId) {
        return res
          .status(400)
          .json({ message: "Email and Vaccine ID are required" });
      }

      const vaccine = await Vaccine.findById(vaccineId).exec();

      if (!vaccine) {
        return res.status(404).json({ message: "Vaccine not found" });
      }

      let user = await User.findOne({ email }).exec();

      if (!user) {
        user = await User.create({
          email,
          name,
          schedules: [vaccine._id],
        });

        await user.save();
        return res.status(201).json({ message: "User has been created!" });
      }

      user.schedules.push(vaccine._id);

      await user.save();

      return res
        .status(200)
        .json({ message: "Vaccine has been added to the user!" });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}