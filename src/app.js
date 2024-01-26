import dotenv from "dotenv";
import {resolve} from 'path'; 

dotenv.config();

import './database'

import express from "express";
import homeR from './routes/homeR';
import useRoutes from './routes/UserRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/AlunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

class App{
  constructor(){
    this.app= express();
    this.middlewares();
    this.routes();

  }

  middlewares(){
    this.app.use(express.urlencoded({extended:true}));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));

  }


  routes(){
    this.app.use('/tokens/', tokenRoutes);
    this.app.use("/",homeR);
    this.app.use("/users/", useRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app;