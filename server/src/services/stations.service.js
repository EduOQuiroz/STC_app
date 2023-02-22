import { models }  from '../libs/sequelize.js';

class StationService {

	async find(){
		const stations = await models.Station.findAll({
			include: ['line']
		})
		return stations;
	}

	async findOne(id){
		const station = await models.Station.findByPk(id)
		return station;
	}

	async create(data){
		const station = await models.Station.create(data)
		return station;
	}
	async update(id, changes){
		const station = await this.findOne(id)
		const stationUpdated = await station.update(changes)
		return stationUpdated;
	}
	async delete(id){
		const station = await this.findOne(id)
		const stationDeleted = await station.destroy()
		return station;
	}
}

export default StationService;
