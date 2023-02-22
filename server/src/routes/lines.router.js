import { Router } from "express";
import LineService from '../services/lines.service.js'
const service = new LineService;
const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const lines = await service.find()
		res.json(lines)
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
	try {
		const body = req.body
		const newLine = await service.create(body)
		res.json(newLine)
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
		const line = await service.findOne(id)
		res.json(line)
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
		const { id } = req.params
		const body = req.body
		const line = await service.update(id, body);
		res.json(line)
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
		const { id } = req.params
		const line = await service.delete(id)
		res.json(line)
  } catch (error) {
    next(error);
  }
});

export default router;
