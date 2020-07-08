// imports
import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRoutes.js';

// concetion DB
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://igti:rafaeldyszy@cluster0-jfolz.mongodb.net/grades',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (err) {
    console.log('Erro ao concetar');
  }
})();

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API iniciada'));
