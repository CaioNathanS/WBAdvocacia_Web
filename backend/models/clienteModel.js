import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema(
  {
        fj:{ type:String, required:true},
        numRegistro:{ type:String },
        nome:{ type:String, require:true },
        estadoCivil:{ type:String },
        nacionalidade:{ type:String, default:'Brasileiro'},
        profissao:{ type:String },
        rg:{ type:String },
        emissor:{ type:String, default:'SSP-DF', required:true},
        dataE:{ type:String },
        telefone:{ type:String,  required:true },
        email:{ type:String, unique:true, required:true,lowercase:true },
        endereco:[{
          cep:{ type:String, required:true},
          estado:{ type:String, required:true, default:'DF', required:true},
          bairro:{ type:String,  required:true },
          cidade:{ type:String,  required:true },
          }],
        caso:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Casos',
        }

        
  }
);
const Cliente = mongoose.model('Cliente', clienteSchema);
export default Cliente;