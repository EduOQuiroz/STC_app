import {LineSchema, Line} from './line.model.js';
import {StationSchema, Station} from './station.model.js';

function setupModels(sequelize){
	Line.init(LineSchema, Line.config(sequelize));
	Station.init(StationSchema, Station.config(sequelize));

	Line.associate(sequelize.models)
	Station.associate(sequelize.models)
}

export default setupModels;
