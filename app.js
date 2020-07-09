// imports
import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRoutes.js';

require('dotenv').config();

// concetion DB
async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${processa.env.USERDB}:${processa.env.PWDDB}@cluster0-jfolz.mongodb.net/grades`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (err) {
    console.log('Erro ao concetar');
  }
};

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log('API iniciada'));
