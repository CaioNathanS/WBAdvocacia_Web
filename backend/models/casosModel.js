import mongoose from 'mongoose';

const casosSchema = new mongoose.Schema(
  {
    advogado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cliente',
      required: true,
    },
    outraParte: {type:String },
    circunstancias: {type:String,required:true },
    fundamento: {type:String, required:true },
    parecer: {type:String },
    andamento:{ type:Boolean, default:true},
    fase:{ type:String },
    condicao:{ type:String, required:true},
    resumo:{ type:String },
  },
  {
    timestamps: true,
  }
);
const Casos = mongoose.model('Casos', casosSchema);
export default Casos;