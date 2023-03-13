import express from 'express';
import mongoose from 'mongoose';

const Animal = mongoose.model('Animal',new mongoose.Schema({
    name: String,
    status: String
}));

const app = express();

mongoose.connect('mongodb://jacobo:password@db:27017/node_app?authSource=admin');

app.get('/', async (_req, res) => {
    console.log('listando...')
    const animales = await Animal.find();
    return res.send(animales)
  })

  app.get('/create', async (_req, res) => {
    console.log('creando...')
    await Animal.create({ name: 'Perro', status: 'Feliz' })
    return res.send('ok')
  })
  
  app.listen(3000, () => console.log('listening...'))




