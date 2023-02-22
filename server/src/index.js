import express from 'express';
import  config from './config/config.js';
import { join} from 'path'
import { routerApi } from './routes/index.js';
import cors from 'cors'

const app = express();


app.use(express.json());
app.use(cors());

routerApi(app)
//*ruta dev
/* const publicPath = join(__dirname, '../../client/dist' );
app.use(express.static(publicPath));
console.log('public', publicPath)
console.log('dirname', __dirname)

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../../client/dist/index.html'));
}) */

//*ruta production
const publicPath = join(__dirname, '../client/dist' );
app.use(express.static(publicPath));
console.log('public', publicPath)
console.log('dirname', __dirname)

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../client/dist/index.html'));
})


app.listen(config.port || 3000, ()=> console.log(`esta vida en el puerto ${config.port}`))
