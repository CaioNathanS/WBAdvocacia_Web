import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import casosRouter from './routers/casosRouter.js';
import clientesRouter from './routers/clientesRouter.js';
import agendaRouter from './routers/agendaRouter.js';
import dotenv from 'dotenv';
import path from 'path';
import postsRouter from './routers/postsRouter.js';
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', userRouter);
app.use('/api/casos', casosRouter);
app.use('/api/clientes', clientesRouter);
app.use('/api/agenda', agendaRouter);
app.use('/api/posts', postsRouter);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });



app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});





