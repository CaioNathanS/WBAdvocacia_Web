import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';


import { isAdmin, isAuth} from  '../utils.js';
import Posts from '../models/postsModel.js';

const postsRouter = express.Router();

postsRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await Product.remove({});
     
        const posts = data.posts.map((posts) => ({
          ...posts,
          
        }));
        const createdPost = await Posts.insertMany(posts);
        res.send({ createdPost });
     
    })
  );

postsRouter.get(
    '/list',
    expressAsyncHandler(async (req, res) => {

      
      
      const posts = await Posts.find()
       
      
      res.send(posts )

    })
  );

postsRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {

      
      
      const posts = await Posts.findById(req.params.id);
       
      
      res.send(posts)

    })
  );


postsRouter.post(
    '/novo',
    expressAsyncHandler(async (req, res) => {
      
        const post = new Posts({
          titulo : req.body.titulo ,
          autor:req.body.autor ,
          conteudo:req.body.conteudo ,
          assunto:req.body.assunto ,
          link:req.body.link,
          dataPubli:req.body.dataPubli,

        });
  
        const novoAgendamento = await post.save();
        res.send([novoAgendamento]);

     
      
    })
  );
postsRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const post = await Posts.findById(req.params.id);
      if (post) {
        const deletedPost = await post.remove();
        res.send({ message: 'Post Deletado', atendimento: deletedPost });
      } else {
        res.status(404).send({ message: 'Post não encontrado' });
      }
    })
  );



export default postsRouter;