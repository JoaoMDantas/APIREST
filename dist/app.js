"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path'); 
_dotenv2.default.config();

require('./database');

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _homeR = require('./routes/homeR'); var _homeR2 = _interopRequireDefault(_homeR);
var _UserRoutes = require('./routes/UserRoutes'); var _UserRoutes2 = _interopRequireDefault(_UserRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _AlunoRoutes = require('./routes/AlunoRoutes'); var _AlunoRoutes2 = _interopRequireDefault(_AlunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

const whiteList=[
  'http://localhost:3006'
]

const corsOptions= {
  origin: function(origin, cb){
    if(whiteList.indexOf(origin)!== -1 || !origin){
      cb(null, true );
    } else{
      cb(new Error('not alowed by CORS'));
    }
  }
}


class App{
  constructor(){
    this.app= _express2.default.call(void 0, );
    this.middlewares();
    this.routes();

  }

  middlewares(){
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({extended:true}));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));

  }


  routes(){
    this.app.use('/tokens/', _tokenRoutes2.default);
    this.app.use("/",_homeR2.default);
    this.app.use("/users/", _UserRoutes2.default);
    this.app.use("/alunos/", _AlunoRoutes2.default);
    this.app.use("/fotos/", _fotoRoutes2.default);
  }
}

exports. default = new App().app;