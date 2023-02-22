"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _sequelize = require("../libs/sequelize.js");
var StationService = /*#__PURE__*/function () {
  function StationService() {
    (0, _classCallCheck2["default"])(this, StationService);
  }
  (0, _createClass2["default"])(StationService, [{
    key: "find",
    value: function () {
      var _find = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var stations;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _sequelize.models.Station.findAll({
                include: ['line']
              });
            case 2:
              stations = _context.sent;
              return _context.abrupt("return", stations);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function find() {
        return _find.apply(this, arguments);
      }
      return find;
    }()
  }, {
    key: "findOne",
    value: function () {
      var _findOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var station;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _sequelize.models.Station.findByPk(id);
            case 2:
              station = _context2.sent;
              return _context2.abrupt("return", station);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function findOne(_x) {
        return _findOne.apply(this, arguments);
      }
      return findOne;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
        var station;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _sequelize.models.Station.create(data);
            case 2:
              station = _context3.sent;
              return _context3.abrupt("return", station);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function create(_x2) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, changes) {
        var station, stationUpdated;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.findOne(id);
            case 2:
              station = _context4.sent;
              _context4.next = 5;
              return station.update(changes);
            case 5:
              stationUpdated = _context4.sent;
              return _context4.abrupt("return", stationUpdated);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        var station, stationDeleted;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.findOne(id);
            case 2:
              station = _context5.sent;
              _context5.next = 5;
              return station.destroy();
            case 5:
              stationDeleted = _context5.sent;
              return _context5.abrupt("return", station);
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
  return StationService;
}();
var _default = StationService;
exports["default"] = _default;