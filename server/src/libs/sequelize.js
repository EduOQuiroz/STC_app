import {Sequelize} from 'sequelize';
import config from '../config/config.js';
import setupModels from '../db/models/index.js'

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
}
if(config.isProd){
  options.dialectOptions = {
  ssl: {
    rejectUnauthorized: false,
  }
}
}

const sequelize = new Sequelize(config.dbUrl , options);
export const models = sequelize.models
setupModels(sequelize)

/*
//*comando en entorno dev para inicializar pruebas con DB
sequelize.sync();*/

export default sequelize;
