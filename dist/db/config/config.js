"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _config = _interopRequireDefault(require("../../config/config.js"));
var USER = encodeURIComponent(_config["default"].dbUser);
var PASSWORD = encodeURIComponent(_config["default"].dbPassword);
var URI = "postgres://".concat(USER, ":").concat(PASSWORD, "@").concat(_config["default"].dbHost, ":").concat(_config["default"].dbPort, "/").concat(_config["default"].dbName);
module.exports = {
  development: {
    url: URI,
    dbUser: "".concat(USER),
    password: "".concat(PASSWORD),
    database: _config["default"].dbName,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  }
};