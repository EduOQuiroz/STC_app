"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerApi = routerApi;
var _express = require("express");
var _stationsRouter = _interopRequireDefault(require("./stations.router.js"));
var _linesRouter = _interopRequireDefault(require("./lines.router.js"));
function routerApi(app) {
  var router = (0, _express.Router)();
  app.use('/api/v1', router);
  router.use('/stations', _stationsRouter["default"]);
  router.use('/lines', _linesRouter["default"]);
}