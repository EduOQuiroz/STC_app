import { Router } from "express";
import StationService from "../services/stations.service.js";
const service = new StationService;
const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const stations = await service.find()
		res.json(stations)
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
	try {
		const body = req.body
		const newStation = await service.create(body)
		res.json(newStation)
		res.send('hola');
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
		const station = await service.findOne(id)
		res.json(station)
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
		const { id } = req.params
		const body = req.body
		const station = await service.update(id, body);
		res.json(station)
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
		const { id } = req.params
		const station = await service.delete(id)
		res.json(station)
  } catch (error) {
    next(error);
  }
});

export default router;
