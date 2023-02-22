"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StationSchema = exports.Station = exports.STATION_TABLE = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _sequelize = require("sequelize");
var _line = require("./line.model");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var STATION_TABLE = 'stations';
exports.STATION_TABLE = STATION_TABLE;
var StationSchema = {
  geom: {
    allowNull: false,
    type: _sequelize.DataTypes.GEOMETRY('POINT', 4326)
  },
  sistema: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING(50)
  },
  nombre: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING(50)
  },
  lineId: {
    field: 'linea_id',
    //!Para que el campo se vicule al alias debe tener el mismo nombre más el tag id
    //!ejemplo {as: 'linea'} se vincula a lineaId
    allowNull: true,
    type: _sequelize.DataTypes.STRING,
    references: {
      model: _line.LINE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  estacion: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING(10)
  },
  id: {
    field: 'estacion_id',
    allowNull: false,
    type: _sequelize.DataTypes.STRING(10),
    primaryKey: true,
    unique: true
  },
  tipo: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING(50)
  },
  alcaldia: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING(50)
  },
  año: {
    allowNull: false,
    type: _sequelize.DataTypes.STRING(50)
  }
};
exports.StationSchema = StationSchema;
var Station = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Station, _Model);
  var _super = _createSuper(Station);
  function Station() {
    (0, _classCallCheck2["default"])(this, Station);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(Station, null, [{
    key: "associate",
    value: function associate(models) {
      this.belongsTo(models.Line, {
        as: 'line'
      });
    }
  }, {
    key: "config",
    value: function config(sequelize) {
      return {
        sequelize: sequelize,
        tableName: STATION_TABLE,
        modelName: 'Station',
        timestamps: false
      };
    }
  }]);
  return Station;
}(_sequelize.Model);
exports.Station = Station;