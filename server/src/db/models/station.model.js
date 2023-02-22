import { Model, DataTypes, Sequelize } from 'sequelize';

import { LINE_TABLE } from './line.model'

const STATION_TABLE = 'stations';

const StationSchema = {
	geom:{
		allowNull: false,
		type: DataTypes.GEOMETRY('POINT', 4326),
	},
	sistema:{
		allowNull: false,
		type: DataTypes.STRING(50),
	},
	nombre:{
		allowNull: false,
		type: DataTypes.STRING(50),
	},
  lineId: {
    field: 'linea_id',
		//!Para que el campo se vicule al alias debe tener el mismo nombre más el tag id
		//!ejemplo {as: 'linea'} se vincula a lineaId
    allowNull: true,
    type: DataTypes.STRING,
    references: {
      model: LINE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
	estacion:{
		allowNull: false,
		type: DataTypes.STRING(10)
	},
	id:{
		field: 'estacion_id',
		allowNull: false,
		type: DataTypes.STRING(10),
		primaryKey: true,
		unique: true,
	},
	tipo:{
		allowNull: false,
		type: DataTypes.STRING(50)
	},
	alcaldia:{
		allowNull: false,
		type: DataTypes.STRING(50)
	},
	año:{
			allowNull: false,
			type: DataTypes.STRING(50)
	}

}

class Station extends Model {

  static associate(models) {
    this.belongsTo(models.Line, {as: 'line'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: STATION_TABLE,
      modelName: 'Station',
      timestamps: false
    }
  }
}

export{ STATION_TABLE, StationSchema,Station };
