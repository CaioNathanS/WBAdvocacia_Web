import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Casos from '../models/casosModel.js';
import data from '../data.js';

import { isAdmin, isAuth} from  '../utils.js';

const casosRouter = express.Router();

casosRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await Product.remove({});
     
        const casos = data.casos.map((caso) => ({
          ...caso,
          
        }));
        const createdCasos = await Casos.insertMany(casos);
        res.send({ createdCasos });
     
    })
  );

casosRouter.get(
    '/list',
    expressAsyncHandler(async (req, res) => {

      
      
      const casos = await Casos.find()
       .populate(
        'advogado',
        'name email oab'
        )
        .populate(
        'cliente',
        'telefone email nome endereco'
        );
      
      res.send( casos )

    })
  );

casosRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const caso = await Casos.findById(req.params.id).populate(
        'advogado',
        'name email oab'
        )
        .populate(
        'cliente',
        
      )
      ;
      if (caso) {
        res.send([caso]);
      } else {
        res.status(404).send({ message: 'Caso não encontrado' });
      }
    })
  );

casosRouter.post(
    '/novo',
    expressAsyncHandler(async (req, res) => {
      
        const caso = new Casos({
          advogado : req.body.advogado ,
          cliente:req.body.cliente ,
          outraParte:req.body.outraParte ,
          circunstancias:req.body.circunstancias ,
          fundamento:req.body.fundamento,
          parecer:req.body.parecer ,
          andamento:req.body.andamento ,
          fase:req.body.fase ,
          condicao:req.body.condicao ,
          resumo:req.body.resumo ,
         
        });
  
        const novoCaso = await caso.save();
        res.send([novoCaso]);

     
      
    })
  );
casosRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const caso = await Casos.findById(req.params.id);
      if (caso) {
        const deletedCaso = await caso.remove();
        res.send({ message: 'Caso Deletado', atendimento: deletedCaso });
      } else {
        res.status(404).send({ message: 'Caso não encontrado' });
      }
    })
  );

casosRouter.put(
    '/:id',
    isAuth,
    
    expressAsyncHandler(async (req, res) => {
      const casosId = req.params.id;
      const casos = await Casos.findById(casosId);
      if (casos) {
        
        casos.advogado=req.body.advogado || casos.advogado;
        casos.cliente=req.body.cliente || casos.cliente;
        casos.outraParte=req.body.outraParte || casos.outraParte;
        casos.circunstancias=req.body.circunstancias || casos.circunstancias;
        casos.fundamento=req.body.fundamento || casos.fundamento;
        casos.parecer=req.body.parecer || casos.parecer;
        casos.andamento=req.body.andamento || casos.andamento;
        casos.fase=req.body.fase || casos.fase;
        casos.condicao=req.body.condicao || casos.condicao;
        casos.resumo=req.body.resumo || casos.resumo;

       
        
        const updatedCaso = await casos.save();
        res.send({ updatedCaso});
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );

export default casosRouter;