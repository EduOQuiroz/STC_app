import config  from '../../config/config.js';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
		dbUser: `${USER}`,
    password: `${PASSWORD}`,
    database: config.dbName,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres',
  }
}
