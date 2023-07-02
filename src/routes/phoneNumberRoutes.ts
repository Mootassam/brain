import express from 'express';
import phoneNumberController from '../controllers/phoneNumberController';

const router = express.Router();

router.get('/generate', phoneNumberController.generatePhoneNumbers);

export default router;