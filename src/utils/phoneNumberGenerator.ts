import UserModel from "../models/User";

class PhoneNumberGenerator {
  static  generatePhoneNumbers(): string[] {
    const phoneNumbers: string[] = [];  
    for (let i = 0; i < 1000; i++) {
      let phoneNumber = this.generatePhoneNumber();
      let isDuplicate =  this.checkDuplicatePhoneNumber(phoneNumber);
      console.log('====================================');
      console.log(isDuplicate);
      console.log('====================================');
      phoneNumbers.push(phoneNumber);
    }
    return phoneNumbers;
  }





  static async checkDuplicatePhoneNumber(phoneNumber: string): Promise<boolean> {
    const existingUser = await UserModel.findOne({ phonenumber: phoneNumber });
    return !!existingUser;
  }

  static generatePhoneNumber(): string {
    const areaCode = '852'; // Hong Kong's country code
    const validFirstDigits = ['5', '6', '9'];
    const firstDigit =
      validFirstDigits[Math.floor(Math.random() * validFirstDigits.length)];
    const number = Math.floor(Math.random() * 9000000) + 1000000; // Random 7-digit number
    return areaCode + firstDigit + number;
  }
}

export default PhoneNumberGenerator;
