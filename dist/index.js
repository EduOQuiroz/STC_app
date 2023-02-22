"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config/config.js"));
var _path = require("path");
var _index = require("./routes/index.js");
var _cors = _interopRequireDefault(require("cors"));
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use((0, _cors["default"])());
(0, _index.routerApi)(app);
//*ruta dev
/* const publicPath = join(__dirname, '../../client/dist' );
app.use(express.static(publicPath));
console.log('public', publicPath)
console.log('dirname', __dirname)

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../../client/dist/index.html'));
}) */

//*ruta production
var publicPath = (0, _path.join)(__dirname, '../client/dist');
app.use(_express["default"]["static"](publicPath));
console.log('public', publicPath);
console.log('dirname', __dirname);
app.get('/', function (req, res) {
  res.sendFile((0, _path.join)(__dirname, '../client/dist/index.html'));
});
app.listen(_config["default"].port || 3000, function () {
  return console.log("esta vida en el puerto ".concat(_config["default"].port));
});