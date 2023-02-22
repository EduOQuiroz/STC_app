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
var LineService = /*#__PURE__*/function () {
  function LineService() {
    (0, _classCallCheck2["default"])(this, LineService);
  }
  (0, _createClass2["default"])(LineService, [{
    key: "find",
    value: function () {
      var _find = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var lines;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _sequelize.models.Line.findAll();
            case 2:
              lines = _context.sent;
              return _context.abrupt("return", lines);
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
        var lines;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _sequelize.models.Line.findByPk(id, {
                include: ['station']
              });
            case 2:
              lines = _context2.sent;
              return _context2.abrupt("return", lines);
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
        var line;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _sequelize.models.Line.create(data);
            case 2:
              line = _context3.sent;
              return _context3.abrupt("return", line);
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
        var line, lineUpdated;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.findOne(id);
            case 2:
              line = _context4.sent;
              _context4.next = 5;
              return line.update(changes);
            case 5:
              lineUpdated = _context4.sent;
              return _context4.abrupt("return", lineUpdated);
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
        var line;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.findOne(id);
            case 2:
              line = _context5.sent;
              _context5.next = 5;
              return line.destroy();
            case 5:
              return _context5.abrupt("return", line);
            case 6:
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
  return LineService;
}();
var _default = LineService;
exports["default"] = _default;