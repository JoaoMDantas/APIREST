"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _foto = require('../models/foto'); var _foto2 = _interopRequireDefault(_foto);

const upload= _multer2.default.call(void 0, _multerConfig2.default).single('arquivo');
 
 
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
      const foto1= await _foto2.default.create({originalnome, filename, aluno_id});
      res.json(foto1);
      } catch(e){
        res.status(400).json({
          err:['aluno não existe']
        });
      }
    })
    
  }
 }

 exports. default = new fotoController();