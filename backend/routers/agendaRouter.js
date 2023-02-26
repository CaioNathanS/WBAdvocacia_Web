import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Agenda from '../models/agendaModel.js';
import data from '../data.js';


import { isAdmin, isAuth} from  '../utils.js';

const agendaRouter = express.Router();

agendaRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await Product.remove({});
     
        const agenda = data.agenda.map((agenda) => ({
          ...agenda,
          
        }));
        const createdAgenda = await Agenda.insertMany(agenda);
        res.send({ createdAgenda });
     
    })
  );

agendaRouter.get(
    '/list',
    expressAsyncHandler(async (req, res) => {

      
      
      const agenda = await Agenda.find()
       
      
      res.send( agenda )

    })
  );

agendaRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const agenda = await Agenda.findById(req.params.id);
      if (agenda) {
        res.send([agenda]);
      } else {
        res.status(404).send({ message: 'Agendamento não encontrado' });
      }
    })
  );

agendaRouter.post(
    '/novo',
    expressAsyncHandler(async (req, res) => {
      
        const agenda = new Agenda({
          nome : req.body.nome ,
          email:req.body.email ,
          telefone:req.body.telefone ,
          assunto:req.body.assunto ,
          data:req.body.data,
          hora:req.body.hora ,
          
         
        });
  
        const novoAgendamento = await agenda.save();
        res.send([novoAgendamento]);

     
      
    })
  );
agendaRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const agenda = await Agenda.findById(req.params.id);
      if (agenda) {
        const deletedAgenda = await agenda.remove();
        res.send({ message: 'Agendamento Deletado', atendimento: deletedAgenda });
      } else {
        res.status(404).send({ message: 'Agendamento encontrado' });
      }
    })
  );



export default agendaRouter;