import User from "../models/User";


class UserController{

async  store(req,res){
  try{
    const novoUser= await User.create(req.body);
    res.json(novoUser);
  } 
  
  catch(e){
    console.log(e);
     res.status(400).json( {
     errors: e.errors.map(err=>err.message)
    });
  }
    
  }

  //index
  async index(req,res){
    try{
      const users=await User.findAll(); //const users=await user.findAll( {attributes: ['id', 'nome', 'email']}); assim vai enviar apenas os atributos

      return res.json(users);
    } catch(e){
      res.json(null);
    }
  }

  //show

  async show(req,res){

    try{
   
    const user= await User.findByPk(req.params.id); 
    const {id,nome,sobrenome,email}=user;
    return res.json({id,nome,sobrenome,email});
    } catch(e) {
      return res.json(null);
    }


  }

  //update
  async update(req,res){
    try{
    
      const user= await   User.findByPk(req.userId);
      if(!user){
        return res.status(400).json({
          errors:['Usuario não existe.'],
        })
      }
     const novosDados= await user.update(req.body)
      return res.json(novosDados);

      } catch(e) {
        return res.json(null);
      }


  }

  //delete
  async delete(req,res){
    try{
     
      const user= await  User.findByPk(req.params.id);
      

      if(!user){
        return res.status(400).json({
          errors:['Usuario não existe.'],
        })
      }
     const usuDelte= await user.destroy();
      return res.json(usuDelte);

      } catch(e) {
        return res.json(e);
      }


  }
  
};

export default new UserController();