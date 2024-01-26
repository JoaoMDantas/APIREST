import { Sequelize, Model } from "sequelize";
import appConfig from "../config/appConfig";

export default class foto extends Model{
  static init(sequelize){
    super.init({
      originalnome:{
        type:Sequelize.STRING,
        defaultValue:'',
        validate:{
          notEmpty:{
            msg:'Campo não pode ficar vázio.',
          },
        },
      }, 
      filename:{
        type:Sequelize.STRING,
        defaultValue:'',
        validate:{
          notEmpty:{
            msg:'Campo não pode ficar vázio.',
          },
        },
      },
      url:{
        type:Sequelize.VIRTUAL,
        get(){
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        }
      },
    },
    {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models){
    this.belongsTo(models.Aluno, {  foreignKey:'aluno_id'})
  }
 
}