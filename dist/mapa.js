"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var map = L.map('map').setView([19.35941466493296, -99.15019173874926], 17);
var capaOSM = new L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 30
});
var capaSatelite = new L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
  maxZoom: 30
});
var gMapsHibryd = new L.tileLayer(' https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
  maxZoom: 30
});
var hereMap = new L.tileLayer('https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/{z}/{x}/{y}');
var capaGMaps = new L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 30,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);
var here = {
  apiKey: '_poEJB6nEAXu-YQctaODRHh1zJmz4uFDu81GDF27Biw',
  style: 'normal.day'
};
var hereTileUrl = new L.tileLayer("https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/".concat(here.style, "/{z}/{x}/{y}/512/png8?apiKey=").concat(here.apiKey, "&ppi=320"));
var capasMap = {
  'OSM': capaOSM,
  'Hibryd': gMapsHibryd,
  'Here': hereTileUrl,
  'Google maps': capaGMaps
};
var mapasBase = new L.control.layers(capasMap);
mapasBase.addTo(map);
var bntSearchEs = document.getElementById("bntSearchEs");
var bntSearchMun = document.getElementById("bntSearchMun");
var btnSearch = document.getElementById("btnSearch");
var btnCp = document.getElementById("btnCp");
var marker1 = [];
var selectEstado = document.getElementById("Estados");
var modal = document.getElementById("tvesModal");
var modal2 = document.getElementById("tvesModal2");
var btn = document.getElementById("btnBusquedaAvanzada");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var body = document.getElementsByTagName("body")[0];
var txtBntSearch = document.getElementById("txtBntSearch");
var btnColonias = document.getElementById("btnColonias");
var calle = [];
var popup = [];
var d = [];
var lang = [];
var lat = [];
var div = document.getElementById('res');
var layer = [];
var municipio = [];
var layerMunicipio = [];
var estado = [];
var layerEstado = [];
var colonia = [];
var layerColonia = [];
var popupColonia = [];
var btnKFC = document.getElementById('btnKFC');
var btnPH = document.getElementById('btnPH');
var groupColonias;
var groupTZ;
var coordinates = document.getElementById("query").value;
var resultados = document.getElementById("resultados");
var contenedor = document.getElementById("contenedor");
var codigoPostal = [];
var layerCodigoPostal = [];
var municipioFiltro = [];
var coloniaFiltro = [];
var codigoFiltro = [];
var layerFiltro = [];
var divChild = [];
var siteLayer = [];
var site = [];
var tz = [];
var layerTz = [];
var txtQuery = document.getElementById("query");
txtQuery.addEventListener('keypress', function () {
  nominatimSearch(txtQuery.value);
});
// funcion que añade un estado a el mapa
function addEstado(_x) {
  return _addEstado.apply(this, arguments);
} // Funcion que agrega un marcardor con los datos obtenidos por la api
function _addEstado() {
  _addEstado = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(data) {
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          if (!(estado.length > 0)) {
            _context13.next = 7;
            break;
          }
          estado.forEach(function (element, i) {
            map.removeLayer(layerEstado[i]);
          });
          estado = [];
          layerEstado = [];
          bntSearchEs.style.background = '#d7d7d8';
          _context13.next = 10;
          break;
        case 7:
          _context13.next = 9;
          return data.forEach(function (element, i) {
            estado.push(JSON.parse(data[i]));
            layerEstado.push(L.geoJSON(estado[i], {
              color: 'rgb(66,66,66)'
            }).bindPopup("".concat(estado[i].properties.nombre_estado, "</br>")));
            //drawnItems.addLayer(layerEstado[i]);
            map.addLayer(layerEstado[i]);
            layerEstado[i].addEventListener('mouseover', function () {
              layerEstado[i].setStyle({
                fillColor: "blue"
              }, {
                color: 'rgb(165,39,20)'
              }, {
                draggable: true
              });
            });
            layerEstado[i].addEventListener('mouseout', function () {
              layerEstado[i].resetStyle();
            });
          });
        case 9:
          bntSearchEs.style.background = '#146eb4';
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _addEstado.apply(this, arguments);
}
function addDireccion(_x2) {
  return _addDireccion.apply(this, arguments);
} //funcion para añadir municipio al mapa
function _addDireccion() {
  _addDireccion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(data) {
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          if (d.length > 0) {
            removeCalle2(d.length);
          }

          //por cada resultado que arroja la api se va agregando un marcador
          _context14.next = 3;
          return data.features.forEach(function (element, i) {
            lat.push(data.features[i].geometry.coordinates[1]);
            lang.push(data.features[i].geometry.coordinates[0]);
            d[i] = document.createElement("div");
            d[i].innerHTML = "".concat(data.features[i].properties.display_name);
            //div.append(d[i])
            layer.push(L.marker([lat[i], lang[i]], 16)); //.bindPopup(`${data.features[i].properties.display_name}</br>Coordenadas:${lat[i]},${lang[i]}`));
            map.addLayer(layer[i]);

            //d[i].addEventListener('click', () => {
            //  map.setView([lang[i], lat[i]], 18)
            //layer[i].openPopup();
            //})
            map.panTo([lat[i], lang[i]], 16);
          });
        case 3:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _addDireccion.apply(this, arguments);
}
function addMunicipio(_x3) {
  return _addMunicipio.apply(this, arguments);
} //FUNCION QUE AGREFA UNA CALLE VECTORIZADA AL MAPA
function _addMunicipio() {
  _addMunicipio = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(data) {
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          if (!(municipio.length > 0)) {
            _context15.next = 7;
            break;
          }
          municipio.forEach(function (element, i) {
            map.removeLayer(layerMunicipio[i]);
          });
          municipio = [];
          layerMunicipio = [];
          bntSearchMun.style.background = '#d7d7d8';
          _context15.next = 10;
          break;
        case 7:
          _context15.next = 9;
          return data.forEach(function (element, i) {
            municipio.push(JSON.parse(data[i]));
            layerMunicipio.push(L.geoJSON(municipio[i], {
              color: 'rgb(66,66,66)'
            }).bindPopup("<p>Municipio: ".concat(municipio[i].properties.Municipio, "</br> Estado:").concat(municipio[i].properties.Estado)));
            //layerMunicipio[i].addTo(map)
            //drawnItems.addLayer(layerMunicipio[i]);

            map.addLayer(layerMunicipio[i]);
            layerMunicipio[i].addEventListener('mouseover', function () {
              layerMunicipio[i].setStyle({
                fillColor: "rgb(165,39,20)"
              }, {
                color: 'rgb(165,39,20)'
              });
            });
            layerMunicipio[i].addEventListener('mouseout', function () {
              layerMunicipio[i].resetStyle();
            });
            layerMunicipio[i].addEventListener('click', function () {
              layerMunicipio[i].setStyle({
                draggable: true
              });
            });
          });
        case 9:
          bntSearchMun.style.background = '#146eb4';
        case 10:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _addMunicipio.apply(this, arguments);
}
function removeCalle(length) {
  if (length > 0) {
    for (i = 0; i < length; i++) {
      div.removeChild(d[i]);
      layer[i].remove();
    }
    d = [];
    popup = [];
    calle = [];
    layer = [];
    lat = [];
    lang = [];
  }
}
function removeCalle2(length) {
  if (length > 0) {
    for (i = 0; i < length; i++) {
      //div.removeChild(d[i]);
      layer[i].remove();
    }
    d = [];
    popup = [];
    calle = [];
    layer = [];
    lat = [];
    lang = [];
  }
}
function addCalle(data) {
  if (d.length > 0 & layer.length > 0) {
    removeCalle(d.length);
  }
  if (data.length <= 0) {
    alert("Los criterios de busqueda no regresan resultados, por favor verificalos y vuelve a intentarlo");
  } else {
    data.forEach(function (element, i) {
      calle.push(JSON.parse(data[i]));
      popup.push("<table>\n        <tr>\n        <td>CALLE:</td>\n        <td>".concat(calle[i].properties.Calle, "</td>\n        </tr>\n        <tr>\n        <td>ESQUINA 1:</td>\n        <td>").concat(calle[i].properties['Esquina 1'], "</td>\n        </tr>\n        <tr>\n        <td>ESQUINA 2:</td>\n        <td>").concat(calle[i].properties['Esquina 2'], "</td>\n        </tr>\n        <tr>\n        <td>COLONIA:</td>\n        <td>").concat(calle[i].properties['Colonia'], "</td>\n        </tr>\n        <td>CODIGO POSTAL:</td>\n        <td>").concat(calle[i].properties['Codigo postal'], "</td>\n        </tr>\n        <td>MUNICIPIO:</td>\n        <td>").concat(calle[i].properties['Municipio'].toUpperCase(), "</td>\n        </tr>\n        <td>ESTADO:</td>\n        <td>").concat(calle[i].properties['Estado'].toUpperCase(), "</td>\n        </tr>\n        <td>MARCA:</td>\n        <td>").concat(calle[i].properties['Marca'].toUpperCase(), "</td>\n        </tr>\n        </table>"));
      layer.push(L.geoJSON(calle[i], {
        weight: 5
      }).bindPopup(popup[i]));
      map.addLayer(layer[i]);
      d[i] = document.createElement("div");
      d[i].innerHTML = popup[i];
      div.append(d[i]);
      lang.push(calle[i].geometry.coordinates[0][0][1]);
      lat.push(calle[i].geometry.coordinates[0][0][0]);
      d[i].addEventListener('click', function () {
        map.flyTo([lang[i], lat[i]], 18);
        layer[i].resetStyle();
        layer[i].setStyle({
          color: 'red'
        });
        layer[i].openPopup();
      });
    });
    map.setView([lang[0], lat[0]], 18);
  }
}
function addColonia(_x4) {
  return _addColonia.apply(this, arguments);
}
function _addColonia() {
  _addColonia = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(data) {
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          if (!(colonia.length > 0)) {
            _context16.next = 7;
            break;
          }
          colonia.forEach(function (element, i) {
            map.removeLayer(layerColonia[i]);
          });
          colonia = [];
          layerColonia = [];
          btnColonias.style.background = '#d7d7d8';
          _context16.next = 11;
          break;
        case 7:
          _context16.next = 9;
          return data.forEach(function (element, i) {
            colonia.push(JSON.parse(data[i]));
            layerColonia.push(L.geoJSON(colonia[i]).bindPopup("<table>\n        <tr>\n        <td>COLONIA:</td>\n        <td>".concat(colonia[i].properties.Colonia, "</td>\n        </tr>\n        <tr>\n        <td>COD POSTAL:</td>\n        <td>").concat(colonia[i].properties["Codigo Postal"], "</td>\n        </tr>\n        <tr>\n        <td>MUNICIPIO:</td>\n        <td>").concat(colonia[i].properties.Municipio.toUpperCase(), "</td>\n        </tr>\n        <tr>\n        <td>ESTADO:</td>\n        <td>").concat(colonia[i].properties.Estado.toUpperCase(), "</td>\n        </tr>\n        </table>")));
            //layerColonia[i].addTo(map)
            // drawnItems.addLayer(layerColonia[i], { color: 'black' });
            map.addLayer(layerColonia[i], {
              color: 'black'
            });
            layerColonia[i].addEventListener('mouseover', function () {
              layerColonia[i].setStyle({
                fillColor: "#4B1BDE"
              }, {
                color: 'red'
              });
            });
            layerColonia[i].addEventListener('mouseout', function () {
              layerColonia[i].resetStyle();
            });
          });
        case 9:
          groupColonias = L.featureGroup(layerColonia).addTo(map).bringToFront();
          btnColonias.style.background = '#146eb4';
        case 11:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _addColonia.apply(this, arguments);
}
function addCodigoPostal(data) {
  if (codigoPostal.length > 0) {
    codigoPostal.forEach(function (element, i) {
      map.removeLayer(layerCodigoPostal[i]);
    });
    codigoPostal = [];
    layerCodigoPostal = [];
    btnCp.style.background = '#d7d7d8';
  } else {
    data.forEach(function (element, i) {
      codigoPostal.push(JSON.parse(data[i]));
      //console.log(codigoPostal[i])
      layerCodigoPostal.push(L.geoJSON(codigoPostal[i]).bindPopup("<p>C\xD3DIGO POSTAL: ".concat(codigoPostal[i].properties.codigo_postal.toUpperCase(), " </br>\n         MUNICIPIO: ").concat(codigoPostal[i].properties.Municipio.toUpperCase(), "\n        ")));
      layerCodigoPostal[i].addTo(map);
      layerCodigoPostal[i].addEventListener('mouseover', function () {
        layerCodigoPostal[i].setStyle({
          fillColor: "#4B1BDE"
        }, {
          color: 'red'
        });
      });
      layerCodigoPostal[i].addEventListener('mouseout', function () {
        layerCodigoPostal[i].resetStyle();
      });
    });
    btnCp.style.background = '#146eb4';
  }
}

//funcion que añade un site al mapa
function addSiteKFC(data) {
  if (site.length > 0) {
    site.forEach(function (element, i) {
      map.removeLayer(siteLayer[i]);
    });
    siteLayer = [];
    site = [];
  } else {
    var myIcon = L.icon({
      iconUrl: "../imagenes/KFC.png",
      iconSize: [30, 30]
    });
    data.forEach(function (element, i) {
      site.push(JSON.parse(data[i]));
      siteLayer.push(L.geoJSON(site[i], {
        pointToLayer: function pointToLayer(geoJsonPoint, latlng) {
          return L.marker(latlng, {
            icon: myIcon
          });
        }
      }).bindPopup("<table>\n         <tr>\n         \n         <td>".concat(site[i].properties.CC, "</td>\n         </tr>\n         <tr>\n         <td>").concat(site[i].properties.Nombre, "</td>\n         </tr>\n         <tr>\n         <td>").concat(site[i].properties.Campaña.toUpperCase(), "</td>\n         </tr>\n         <tr>\n         <td>").concat(site[i].properties.Marca.toUpperCase(), "</td>\n         </tr>\n         <tr>\n         <td>DIRECCION:</td>\n         </tr>\n         <tr>\n        <td>").concat(site[i].properties.DIRECCION, "</td>\n         </tr>\n         <tr>\n        <td>").concat(site[i].properties["NUM EXT"], "</td>\n         </tr>\n         <tr>\n        <td>").concat(site[i].properties.Colonia, "</td>\n         </tr>\n         <tr>\n         <td>").concat(site[i].properties.Municipo, "</td>\n          </tr>\n          <tr>\n         <td>").concat(site[i].properties.Estado, "</td>\n          </tr>\n         </table>")));
      map.addLayer(siteLayer[i]);
    });
  }
}
function addSitePH(data) {
  if (site.length > 0) {
    site.forEach(function (element, i) {
      map.removeLayer(siteLayer[i]);
    });
    siteLayer = [];
    site = [];
  } else {
    var myIconPH = L.icon({
      iconUrl: "../imagenes/PH.png",
      iconSize: [30, 30]
    });
    data.forEach(function (element, i) {
      site.push(JSON.parse(data[i]));
      siteLayer.push(L.geoJSON(site[i], {
        pointToLayer: function pointToLayer(geoJsonPoint, latlng) {
          return L.marker(latlng, {
            icon: myIconPH
          });
        }
      }).bindPopup("<table>\n         <tr>\n         \n         <td>".concat(site[i].properties.CC, "</td>\n         </tr>\n         <tr>\n         <td>").concat(site[i].properties.Nombre, "</td>\n         </tr>\n         <tr>\n         <td>").concat(site[i].properties.Campaña.toUpperCase(), "</td>\n         </tr>\n         <tr>\n         <td>").concat(site[i].properties.Marca.toUpperCase(), "</td>\n         </tr>\n         <tr>\n         <td>DIRECCION:</td>\n         </tr>\n         <tr>\n        <td>").concat(site[i].properties.DIRECCION, "</td>\n         </tr>\n         <tr>\n        <td>").concat(site[i].properties["NUM EXT"], "</td>\n         </tr>\n         <tr>\n        <td>").concat(site[i].properties.Colonia, "</td>\n         </tr>\n         <tr>\n         <td>").concat(site[i].properties.Municipo, "</td>\n          </tr>\n          <tr>\n         <td>").concat(site[i].properties.Estado, "</td>\n          </tr>\n         </table>")));
      map.addLayer(siteLayer[i]);
    });
  }
}

//funcion que añade tz al mapa
function addTzKFC(data) {
  if (tz.length > 0) {
    tz.forEach(function (element, i) {
      map.removeLayer(layerTz[i]);
    });
    layerTz = [];
    tz = [];

    // btnmarca.style.background = '#FFAB4C';
  } else {
    data.forEach(function (element, i) {
      tz.push(JSON.parse(data[i]));
      layerTz.push(L.geoJSON(tz[i], {
        color: 'rgb(165,39,20)',
        fillColor: 'rgb(117,117,117)'
      }).bindPopup("<p>CC: ".concat(tz[i].properties["CC"], "</p>Marca: ").concat(tz[i].properties["Marca"])));
      map.addLayer(layerTz[i]);
    });
    groupTZ = L.featureGroup(layerTz).addTo(map).bringToBack();

    //btn.style.background = '#146eb4';
  }
}

function addTzPH(data) {
  if (tz.length > 0) {
    tz.forEach(function (element, i) {
      map.removeLayer(layerTz[i]);
    });
    layerTz = [];
    tz = [];

    //btnmarca.style.background = '#FFAB4C';
  } else {
    data.forEach(function (element, i) {
      tz.push(JSON.parse(data[i]));
      layerTz.push(L.geoJSON(tz[i], {
        color: 'rgb(165,39,20)',
        fillColor: 'rgb(117,117,117)'
      }).bindPopup("<p>CC: ".concat(tz[i].properties["CC"], "</p>Marca: ").concat(tz[i].properties["Marca"])));
      map.addLayer(layerTz[i]);
    });
    groupTZ = L.featureGroup(layerTz).addTo(map).bringToBack();

    //btnmarca.style.background = '#146eb4';
  }
}

//evento que al hacer click realiza una busqueda en nominatim
var nominatimSearch = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(query) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://nominatim.openstreetmap.org/search?q=".concat(query, "&format=geojson")).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.features.length == 0) {
              alert("Los criterios de busqueda no regresan resultados,\n                 por favor verificalos y vuelve a intentarlo");
            } else {
              addDireccion(data);
            }
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function nominatimSearch(_x5) {
    return _ref.apply(this, arguments);
  };
}();
btnSearch.addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var query;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        query = document.getElementById("query").value;
        nominatimSearch(query);
      case 2:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));

// evento que al hacer click en el boton estados  realiza una peticion a la api sobre los municipios
bntSearchMun.addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
  var id_Estado;
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        id_Estado = document.getElementById("Estados").value;
        _context3.next = 3;
        return fetch("http://localhost:3000/Municipios/".concat(id_Estado)).then(function (response) {
          return response.json();
        }).then(function (data) {
          //console.log(data.features[0].geometry.coordinates)
          // console.log(data)
          addMunicipio(data);
        });
      case 3:
      case "end":
        return _context3.stop();
    }
  }, _callee3);
})));

// evento que al hacer click en el boton estados  realiza una peticion a la pi sobre los estados
bntSearchEs.addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
  return _regenerator["default"].wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.next = 2;
        return fetch("http://localhost:3000/Estados").then(function (response) {
          return response.json();
        }).then(function (data) {
          //console.log(data.features[0].geometry.coordinates)
          // console.log(data)
          addEstado(data);
        });
      case 2:
      case "end":
        return _context4.stop();
    }
  }, _callee4);
})));
//codigos postaes
btnCp.addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
  var id_Estado;
  return _regenerator["default"].wrap(function _callee5$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        id_Estado = document.getElementById("Estados").value;
        _context5.next = 3;
        return fetch("http://localhost:3000/Codigos/".concat(id_Estado)).then(function (response) {
          return response.json();
        }).then(function (data) {
          //console.log(data.features[0].geometry.coordinates)
          // console.log(data)
          addCodigoPostal(data);
        });
      case 3:
      case "end":
        return _context5.stop();
    }
  }, _callee5);
})));

//funcion que al hacer click busca una direccion en la bd
txtBntSearch.onclick = /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
  var txtSearchCalle, txtSearchEsquina, idEstado, txtColonia, query;
  return _regenerator["default"].wrap(function _callee6$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        txtSearchCalle = document.getElementById("txtSearchCalle").value.toUpperCase();
        txtSearchEsquina = document.getElementById("txtSearchEsquina").value.toUpperCase();
        idEstado = document.getElementById('EstadosbAb').value;
        txtColonia = document.getElementById('txtColonia').value.toUpperCase();
        if (!(txtSearchCalle == "")) {
          _context6.next = 8;
          break;
        }
        alert("Ingresa El nombre de una calle");
        _context6.next = 13;
        break;
      case 8:
        if (txtSearchEsquina == "") {
          txtSearchEsquina = 'NA';
        }
        if (txtColonia == "") {
          txtColonia = 'NA';
        }
        query = "http://localhost:3000/".concat(txtSearchCalle, "/").concat(txtSearchEsquina, "/").concat(txtColonia, "/").concat(idEstado);
        _context6.next = 13;
        return fetch("".concat(query)).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.length <= 0) {
            alert("Los criterios de busqueda no regresan resultados, por favor verificalos y vuelve a intentarlo");
          } else {
            addCalle(data);
          }
        });
      case 13:
      case "end":
        return _context6.stop();
    }
  }, _callee6);
}));
var btnFiltro = document.getElementById("btnFiltro");
btnFiltro.onclick = function () {
  modal2.style.display = "block";
  body.style.position = "static";
  body.style.height = "100%";
  body.style.overflow = "hidden";
};
btn.onclick = function () {
  modal.style.display = "block";
  body.style.position = "static";
  body.style.height = "100%";
  body.style.overflow = "hidden";
};
span2.onclick = function () {
  modal2.style.display = "none";
  body.style.position = "inherit";
  body.style.height = "auto";
  body.style.overflow = "visible";
};
span.onclick = function () {
  modal.style.display = "none";
  body.style.position = "inherit";
  body.style.height = "auto";
  body.style.overflow = "visible";
};
btnColonias.addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
  var estado, query;
  return _regenerator["default"].wrap(function _callee7$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        estado = document.getElementById("Estados").value;
        query = "http://localhost:3000/Colonias/".concat(estado);
        _context7.next = 4;
        return fetch("".concat(query)).then(function (response) {
          return response.json();
        }).then(function (data) {
          addColonia(data);
        });
      case 4:
      case "end":
        return _context7.stop();
    }
  }, _callee7);
})));
var txtBntSearchFiltro = document.getElementById("txtBntSearchFiltro");
txtBntSearchFiltro.addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
  var estadosFiltro, capa, txtFiltro, query;
  return _regenerator["default"].wrap(function _callee8$(_context8) {
    while (1) switch (_context8.prev = _context8.next) {
      case 0:
        estadosFiltro = document.getElementById("estadosFiltro").value;
        capa = document.getElementById("Capa").value;
        txtFiltro = document.getElementById("txtFiltro").value.toUpperCase();
        query = "http://localhost:3000/Filtrar".concat(capa, "/").concat(estadosFiltro, "/").concat(txtFiltro);
        console.log(query);
        _context8.next = 7;
        return fetch("".concat(query)).then(function (response) {
          return response.json();
        }).then(function (data) {
          addFiltro(data, capa);
        });
      case 7:
      case "end":
        return _context8.stop();
    }
  }, _callee8);
})));
function addFiltroMunicipio(data) {
  if (divChild.length > 0) {
    divChild.forEach(function (element, i) {
      map.removeLayer(layerFiltro[i]);
      div.removeChild(divChild[i]);
    });
    municipioFiltro = [];
    layerFiltro = [];
    divChild = [];
  }
  data.forEach(function (element, i) {
    municipioFiltro.push(JSON.parse(data[i]));
    layerFiltro.push(L.geoJSON(municipioFiltro[i]).bindPopup("<p>Municipio: ".concat(municipioFiltro[i].properties.Municipio, "</br> Estado:").concat(municipioFiltro[i].properties.Estado)));
    divChild[i] = document.createElement("div");
    divChild[i].innerHTML = "<p>Municipio: ".concat(municipioFiltro[i].properties.Municipio, "</br> Estado:").concat(municipioFiltro[i].properties.Estado);
    div.append(divChild[i]);
    map.addLayer(layerFiltro[i]);
    map.setView([municipioFiltro[0].properties.Centroide.coordinates[1], municipioFiltro[0].properties.Centroide.coordinates[0]], 10);
    divChild[i].addEventListener('click', function () {
      map.setView(map.getCenter(layerFiltro[i]), 12);
      layerFiltro[i].openPopup();
    });
    layerFiltro[i].addEventListener('mouseover', function () {
      layerFiltro[i].setStyle({
        fillColor: "#4B1BDE"
      }, {
        color: 'red'
      });
    });
    layerFiltro[i].addEventListener('mouseout', function () {
      layerFiltro[i].resetStyle();
    });
  });
}
function addFiltroColonia(data) {
  if (divChild.length > 0) {
    divChild.forEach(function (element, i) {
      map.removeLayer(layerFiltro[i]);
      div.removeChild(divChild[i]);
    });
    coloniaFiltro = [];
    layerFiltro = [];
    divChild = [];
  }
  data.forEach(function (element, i) {
    coloniaFiltro.push(JSON.parse(data[i]));
    layerFiltro.push(L.geoJSON(coloniaFiltro[i]).bindPopup("<table>\n        <tr>\n        <td>COLONIA:</td>\n        <td>".concat(coloniaFiltro[i].properties.Colonia, "</td>\n        </tr>\n        <tr>\n        <td>COD POSTAL:</td>\n        <td>").concat(coloniaFiltro[i].properties["Codigo Postal"], "</td>\n        </tr>\n        <tr>\n        <td>MUNICIPIO:</td>\n        <td>").concat(coloniaFiltro[i].properties.Municipio.toUpperCase(), "</td>\n        </tr>\n        <tr>\n        <td>ESTADO:</td>\n        <td>").concat(coloniaFiltro[i].properties.Estado.toUpperCase(), "</td>\n        </tr>\n        </table>")));
    map.addLayer(layerFiltro[i]);
    map.setView([coloniaFiltro[0].properties.Centroide.coordinates[1], coloniaFiltro[0].properties.Centroide.coordinates[0]], 14);
    divChild[i] = document.createElement("div");
    divChild[i].innerHTML = "<table>\n            <tr>\n            <td>COLONIA:</td>\n            <td>".concat(coloniaFiltro[i].properties.Colonia, "</td>\n            </tr>\n            <tr>\n            <td>COD POSTAL:</td>\n            <td>").concat(coloniaFiltro[i].properties["Codigo Postal"], "</td>\n            </tr>\n            <tr>\n            <td>MUNICIPIO:</td>\n            <td>").concat(coloniaFiltro[i].properties.Municipio.toUpperCase(), "</td>\n            </tr>\n            <tr>\n            <td>ESTADO:</td>\n            <td>").concat(coloniaFiltro[i].properties.Estado.toUpperCase(), "</td>\n            </tr>\n            </table>");
    div.append(divChild[i]);
    divChild[i].addEventListener('click', function () {
      map.setView(map.getCenter(layerFiltro[i]), 14);
      layerFiltro[i].openPopup();
    });
    layerFiltro[i].addEventListener('mouseover', function () {
      layerFiltro[i].setStyle({
        fillColor: "#4B1BDE"
      }, {
        color: 'red'
      });
    });
    layerFiltro[i].addEventListener('mouseout', function () {
      layerFiltro[i].resetStyle();
    });
  });
}
function addFiltroCP(data) {
  if (divChild.length > 0) {
    divChild.forEach(function (element, i) {
      map.removeLayer(layerFiltro[i]);
      div.removeChild(divChild[i]);
    });
    codigoFiltro = [];
    layerFiltro = [];
    divChild = [];
  }
  data.forEach(function (element, i) {
    codigoFiltro.push(JSON.parse(data[i]));
    //console.log(codigoPostal[i])
    layerFiltro.push(L.geoJSON(codigoFiltro[i]).bindPopup("<p>C\xD3DIGO POSTAL: ".concat(codigoFiltro[i].properties.codigo_postal.toUpperCase(), " </br>\n         MUNICIPIO: ").concat(codigoFiltro[i].properties.Municipio.toUpperCase())));
    map.addLayer(layerFiltro[i]);
    map.setView([codigoFiltro[0].properties.Centroide.coordinates[1], codigoFiltro[0].properties.Centroide.coordinates[0]], 14);
    divChild[i] = document.createElement("div");
    divChild[i].innerHTML = "<p>C\xD3DIGO POSTAL: ".concat(codigoFiltro[i].properties.codigo_postal.toUpperCase(), " </br>\n            MUNICIPIO: ").concat(codigoFiltro[i].properties.Municipio.toUpperCase());
    div.append(divChild[i]);
    divChild[i].addEventListener('click', function () {
      map.setView(map.getCenter(layerFiltro[i]), 14);
      layerFiltro[i].openPopup();
    });
    layerFiltro[i].addEventListener('mouseover', function () {
      layerFiltro[i].setStyle({
        fillColor: "#4B1BDE"
      }, {
        color: 'red'
      });
    });
    layerFiltro[i].addEventListener('mouseout', function () {
      layerFiltro[i].resetStyle();
    });
  });
}
function addFiltro(data, Capa) {
  if (data.length <= 0) {
    alert("No hay resultados, intenta nuevamente");
  }
  if (Capa == "Municipio") {
    addFiltroMunicipio(data);
  } else if (Capa == "Colonia") {
    addFiltroColonia(data);
  } else if (Capa == "CodigoPostal") {
    addFiltroCP(data);
  }
}
var getSiteKFC = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
    var query;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          query = "http://localhost:3000/sites/KFC";
          _context9.next = 3;
          return fetch("".concat(query)).then(function (response) {
            return response.json();
          }).then(function (data) {
            addSiteKFC(data);
          });
        case 3:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function getSiteKFC() {
    return _ref9.apply(this, arguments);
  };
}();
var getSitePH = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
    var query;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          query = "http://localhost:3000/sites/PH";
          _context10.next = 3;
          return fetch("".concat(query)).then(function (response) {
            return response.json();
          }).then(function (data) {
            addSitePH(data);
          });
        case 3:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function getSitePH() {
    return _ref10.apply(this, arguments);
  };
}();
var getTzKFC = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
    var query;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          query = "http://localhost:3000/tz/KFC";
          _context11.next = 3;
          return fetch("".concat(query)).then(function (response) {
            return response.json();
          }).then(function (data) {
            addTzKFC(data);
          });
        case 3:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function getTzKFC() {
    return _ref11.apply(this, arguments);
  };
}();
var getTzPH = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
    var query;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          query = "http://localhost:3000/tz/PH";
          _context12.next = 3;
          return fetch("".concat(query)).then(function (response) {
            return response.json();
          }).then(function (data) {
            addTzPH(data);
          });
        case 3:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function getTzPH() {
    return _ref12.apply(this, arguments);
  };
}();
btnPH.addEventListener('click', function () {
  getSitePH();
  getTzPH();
});

//btnKFC.addEventListener('click',getTz())
btnKFC.addEventListener('click', function () {
  getSiteKFC();
  getTzKFC();
});
getSiteKFC();
getTzKFC();