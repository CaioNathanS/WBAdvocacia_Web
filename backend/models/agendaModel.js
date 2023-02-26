import mongoose from 'mongoose';

const agendaSchema = new mongoose.Schema(
  {
    
    nome: {type:String, required:true  },
    email: {type:String,required:true },
    telefone: {type:String, required:true },
    assunto: {type:String, required:true },
    data: {type:String, required:true },
    hora: {type:String, required:true },
   
  },
  {
    timestamps: true,
  }
);
const Agenda = mongoose.model('Agenda', agendaSchema);
export default Agenda;