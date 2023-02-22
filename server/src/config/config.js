import dotenv from 'dotenv';
dotenv.config();

const config = {
	port: process.env.PORT,
	dbUser:  process.env.DB_USER,
  dbPassword:  process.env.DB_PASSWORD,
  dbHost:  process.env.DB_HOST,
  dbName:  process.env.DB_NAME,
  dbPort:  process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
}

export default config;
