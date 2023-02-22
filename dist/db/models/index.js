"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _lineModel = require("./line.model.js");
var _stationModel = require("./station.model.js");
function setupModels(sequelize) {
  _lineModel.Line.init(_lineModel.LineSchema, _lineModel.Line.config(sequelize));
  _stationModel.Station.init(_stationModel.StationSchema, _stationModel.Station.config(sequelize));
  _lineModel.Line.associate(sequelize.models);
  _stationModel.Station.associate(sequelize.models);
}
var _default = setupModels;
exports["default"] = _default;