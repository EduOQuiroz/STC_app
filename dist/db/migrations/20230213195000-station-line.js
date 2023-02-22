"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _station = require("../models/station.model");
var _line = require("../models/line.model");
module.exports = {
  up: function up(queryInterface) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return queryInterface.createTable(_line.LINE_TABLE, _line.LineSchema);
          case 2:
            _context.next = 4;
            return queryInterface.createTable(_station.STATION_TABLE, _station.StationSchema);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return queryInterface.dropTable(_station.STATION_TABLE);
          case 2:
            _context2.next = 4;
            return queryInterface.dropTable(_line.LINE_TABLE);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};