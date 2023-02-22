import {Router} from 'express'
import stationRouter from './stations.router.js'
import lineRouter from './lines.router.js'

export function routerApi(app){
	const router = Router();
	app.use('/api/v1', router)
	router.use('/stations', stationRouter)
	router.use('/lines', lineRouter)
}

