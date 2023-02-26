import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Clientes from '../models/clienteModel.js';
import data from '../data.js';

import { isAdmin, isAuth} from  '../utils.js';

const clientesRouter = express.Router();

clientesRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await Clientes.remove({});
     
        const clientes = data.clientes.map((clientes) => ({
          ...clientes,
          
        }));
        const createdClientes = await Clientes.insertMany(clientes);
        res.send({ createdClientes });
    
    })
  );

clientesRouter.get(
    '/list',
    
    expressAsyncHandler(async (req, res) => {
      
      const clientes= await Clientes.find({}).populate(
        'caso'
      );
      
      res.send( clientes )

    })
  );

clientesRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const cliente = await Clientes.findById(req.params.id).populate({
        path : 'caso',
        populate : {
          path : 'advogado',
          select: 'name'
        }
      }
      )
      ;
      if (cliente) {
        res.send([cliente]);
      } else {
        res.status(404).send({ message: 'Cliente não encontrado' });
      }
    })
  );

clientesRouter.post(
    '/novo',
    isAuth,
    expressAsyncHandler(async (req, res) => {

    
        const cliente = new Clientes({
            fj : req.body.fj ,
            numRegistro:req.body.numRegistro ,
            nome:req.body.nome ,
            estadoCivil:req.body.estadoCivil ,
            nacionalidade:req.body.nacionalidade,
            profissao:req.body.profissao ,
            rg:req.body.rg ,
            emissor:req.body.emissor ,
            dataE:req.body.dataE ,
            telefone:req.body.telefone ,
            email:req.body.email ,
            endereco:req.body.endereco ,
            caso :req.body.caso ,
          });
    
          const novoCliente = await cliente.save();
          res.send({novoCliente});

      
    })
  );

clientesRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const cliente = await Clientes.findById(req.params.id);
      if (cliente) {
        const deletedCliente = await cliente.remove();
        res.send({ message: 'Cliente Deletado',  deletedCliente });
      } else {
        res.status(404).send({ message: 'Cliente não encontrado' });
      }
    })
  );

clientesRouter.put(
    '/:id',
    isAuth,
    
    expressAsyncHandler(async (req, res) => {
      const clienteId = req.params.id;
      const cliente = await Clientes.findById(clienteId);
      if (cliente){
      
          cliente.fj=req.body.fj || cliente.fj;
          cliente.numRegistro=req.body.numRegistro || cliente.numRegistro;
          cliente.nome=req.body.nome || cliente.nome;
          cliente.estadoCivil=req.body.estadoCivil || cliente.estadoCivil;
          cliente.nacionalidade=req.body.nacionalidade || cliente.nacionalidade;
          cliente.profissao=req.body.profissao || cliente.profissao;
          cliente.rg=req.body.rg || cliente.rg;
          cliente.emissor=req.body.emissor || cliente.emissor;
          cliente.dataE=req.body.dataE || cliente.dataE;
          cliente.telefone=req.body.telefone || cliente.telefone;
          if(req.body.email !== cliente.email){
            cliente.email=req.body.email || cliente.email
          }
           
          cliente.endereco=req.body.endereco || cliente.endereco;
          cliente.caso=req.body.caso || cliente.caso;
  
  
          const updatedCliente = await cliente.save();
          res.send({ updatedCliente});
        }
        
      else {
        res.status(404).send({ message: 'Product Not Found' });
      }
      
    })
  );

export default clientesRouter;