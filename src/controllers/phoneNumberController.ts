import { Request, Response } from "express";
import PhoneNumberGenerator from "../utils/phoneNumberGenerator";
import UserModel from "../models/User"; // Update the import statement to the correct file

class PhoneNumberController {
  static generatePhoneNumbers(req: Request, res: Response) {
    try {
      const phoneNumbers = PhoneNumberGenerator.generatePhoneNumbers();
      res.json(phoneNumbers);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  static async saveUsers(usersArray: string[]) {
    try {
      const users = usersArray.map((phonenumber) => ({ phonenumber }));
  
      for (const user of users) {
        console.log("====================================");
        console.log(user.phonenumber);
        console.log("====================================");
        const newUser = new UserModel({ phonenumber: user.phonenumber });
        await newUser.save();
      }
  
      console.log("Users saved successfully!");
    } catch (error) {
      console.error("Error saving users:", error);
    }
  }


  
  
}

export default PhoneNumberController;
