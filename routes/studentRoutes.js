import express from 'express';
import { studentModel } from '../models/studentModels.js';
const app = express();

app.get('/student', async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findByIdAndDelete(req.params.id);
    if (!student) {
      res.status(404).send('Documento nao encontrado!');
    }
    res.status(200).send('Excluido com sucesso!');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put('/student/:id', async (req, res) => {
  try {
    const student = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as studentRouter };
