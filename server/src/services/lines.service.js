import { models }  from '../libs/sequelize.js';

class LineService {

	async find(){
		const lines = await models.Line.findAll()
		return lines;
	}

	async findOne(id){
		const lines = await models.Line.findByPk(id, {
			include: ['station']
		})
		return lines;
	}

	async create(data){
		const line = await models.Line.create(data)
		return line;
	}
	async update(id, changes){
		const line = await this.findOne(id)
		const lineUpdated = await line.update(changes)
		return lineUpdated;
	}
	async delete(id){
		const line = await this.findOne(id)
		await line.destroy()
		return line;
	}
}

export default LineService;
