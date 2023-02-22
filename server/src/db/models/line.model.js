import { Model, DataTypes, Sequelize } from 'sequelize';

const LINE_TABLE = 'lines';

const LineSchema = {
	geom:{
		allowNull: false,
		type: DataTypes.GEOMETRY('LINESTRING', 4326),
	},
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(10),
		unique: true,
  },
	sistema:{
		allowNull: false,
    type: DataTypes.STRING(50),
	},
	ruta:{
		allowNull: false,
    type: DataTypes.STRING(50),
	}

};

class Line extends Model {
  static associate(models) {
    this.hasMany(models.Station,{
      as: 'station',
      foreignKey: 'lineId',
    } )
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: LINE_TABLE,
      modelName: 'Line',
      timestamps: false,
    };
  }
}

export { LINE_TABLE, LineSchema, Line };
