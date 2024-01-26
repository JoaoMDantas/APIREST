import multer from "multer";
import multerConfig from "../config/multerConfig";

import foto from "../models/foto";

const upload= multer(multerConfig).single('arquivo');
 
 
 class fotoController{
   store(req, res){
    return  upload(req,res, async(err)=>{
      if(err){
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try{
      const {originalname, filename}= req.file;
      const {aluno_id}= req.body;
      const originalnome=originalname;
      const foto1= await foto.create({originalnome, filename, aluno_id});
      res.json(foto1);
      } catch(e){
        res.status(400).json({
          err:['aluno não existe']
        });
      }
    })
    
  }
 }

 export default new fotoController();