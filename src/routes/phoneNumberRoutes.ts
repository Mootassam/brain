import express from 'express';
import phoneNumberController from '../controllers/phoneNumberController';

const router = express.Router();

const bodyParser = require('body-parser');
// Add body parser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.get('/generate', phoneNumberController.generatePhoneNumbers);

router.post('/save', async (req, res) => {
    try {
      await phoneNumberController.saveUsers(req.body.users);
      res.status(200).json({ message: 'Users saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

export default router;