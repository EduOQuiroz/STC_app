"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.models = exports["default"] = void 0;
var _sequelize = require("sequelize");
var _config = _interopRequireDefault(require("../config/config.js"));
var _index = _interopRequireDefault(require("../db/models/index.js"));
var options = {
  dialect: 'postgres',
  logging: _config["default"].isProd ? false : true
};
if (_config["default"].isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}
var sequelize = new _sequelize.Sequelize(_config["default"].dbUrl, options);
var models = sequelize.models;
exports.models = models;
(0, _index["default"])(sequelize);

/*
//*comando en entorno dev para inicializar pruebas con DB
sequelize.sync();*/
var _default = sequelize;
exports["default"] = _default;