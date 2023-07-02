import { Request, Response } from 'express';
import PhoneNumberGenerator from '../utils/phoneNumberGenerator';

class PhoneNumberController {
  static generatePhoneNumbers(req: Request, res: Response) {
    try {
      const phoneNumbers = PhoneNumberGenerator.generatePhoneNumbers();
      res.json(phoneNumbers);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default PhoneNumberController;
