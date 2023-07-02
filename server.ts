import mongoose from 'mongoose';
import express, { Application, Request, Response } from 'express';

import phoneNumberRoutes from './src/routes/phoneNumberRoutes'


const url = 'mongodb://localhost:27017';
const dbName = 'numbers';

const app: Application = express();
const PORT = 8080;

mongoose
  .connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Failed to connect to MongoDB', error);
  });


app.use('/phoneNumbers', phoneNumberRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the API');
  });