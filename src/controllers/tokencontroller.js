import jsonwebtoken from "jsonwebtoken";
import User from "../models/User";


class TokenController{


  async store(req,res){
    const {email='',password=''}=req.body;

    if(!email || !password){
      return res.status(401).json({
        errors:['credenciais inválidas'],
      })
    }

    const user =await User.findOne({where:{email}});

    if(!user){
      return res.status(401).json({
        errors:['usuário não existe']
      })
    }
    if(!(await user.comparepassword(password))){
      return res.status(401).json({
        errors:['senha inválida']
      })
    
    }

    const {id}=user;
    const token = jsonwebtoken.sign({id, email}, process.env.TOKEN_SECRET,{
      expiresIn:process.env.TOKEN_EXPIRATION,
    });
    res.json({token});
  };
  
};

export default new TokenController();