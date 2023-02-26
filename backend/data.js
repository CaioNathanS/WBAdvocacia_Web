import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nathan',
      email: 'ademir@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      oab:'157'
    },
    {
      name: 'Wenderson Braz',
      email: 'wbraz.adv@gmail.com',
      password: bcrypt.hashSync('wend2214', 8),
      isAdmin: true,
      oab:'60057'
    }

    
    
  ],
  agenda: [
    {
      nome: 'Nathan',
      email: 'ademisdr@example.com',
      telefone: '1515m',
      assunto:'Manobras',
      hora:'1515',
      data:'157'
    },

    
    
  ],

  posts: [
    {
      titulo: 'asdsad',
      autor: '6092cdf33d56a917947715e3',
      conteudo: '1515m',
      assunto:'Manobras',
      link:'1515',
      data:'ada',
      hora:'adda',
    },

    
    
  ],
  clientes:[{
    fj:'Física',
    numRegistro:'546',
    nome:'asd',
    estadoCivil:'sd',
    profissao:'sdsd',
    rg:'157',
    dataE:'01.01.1999',
    telefone:'asdas',
    email:'sadasda',
    endereco:[{
      cep:'213213',
      bairro:'wqe12',
      cidade:'213213',
      }],
    
    
  },

  {
    fj:'Física',
    numRegistro:'54sd6',
    nome:'assd',
    estadoCivil:'sasdd',
    profissao:'sdsdsd',
    rg:'15sd7',
    dataE:'01.01.1999',
    telefone:'asdasds',
    email:'sadasdsda',
    endereco:[{
      cep:'21321sd3',
      bairro:'wqeds12',
      cidade:'2132sd13',
      }],
    
    
  }
],
  casos: [
    {
      advogado:'6092cdf33d56a917947715e3',
      cliente:'6092d179439a12220482f0a5',
      outraParte: 'a',
      circunstancias: 'b',
      fundamento: 'c',
      parecer: 'd',
      andamento: true,
      fase:'f',
      condicao:false,
      resumo:'h'  
    },

    {
      advogado:'6092cdf33d56a917947715e3',
      cliente:'6092d179439a12220482f0a5',
      outraParte: 'aas',
      circunstancias: 'bs',
      fundamento: 'cf',
      parecer: 'dsa',
      andamento: false,
      fase:'fds',
      condicao:true,
      resumo:'has'  
        
    },
    
   
    
    
  ],
};
export default data;
