import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema(

  {
    titulo: {type:String, required:true },
    autor: {type:String, required:true },
    conteudo: {type:String, required:true },
    assunto: {type:String, required:true },
    link: {type:String},
    dataPubli: {type:String}
    

  },
  
);
const Posts = mongoose.model('Posts', postsSchema);
export default Posts;