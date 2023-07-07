import mongoose from 'mongoose';
import express, { Application, Request, Response } from 'express';
import phoneNumberRoutes from './routes/phoneNumberRoutes'
import cors from 'cors';

const router = express.Router();
const app: Application = express();
const PORT = 8080;
const bodyParser = require('body-parser');


app.use(cors());

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost:27017/phonenumber', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    app.listen(PORT,'192.168.10.57' , () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Failed to connect to MongoDB', error);
  });


app.use('/api/phone', phoneNumberRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the API');
  });