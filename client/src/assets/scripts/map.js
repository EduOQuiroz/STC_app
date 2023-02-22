import L from 'leaflet';
import {
	getStationsRequests,
	getLinesRequests,
	getStationsByLineRequests,
} from '../../api/getData';
import { tileLayers } from '../../utils/tileLayers';
import { createMap } from '../../utils/createMap';
import stcMetro from '@images/stc-metro.png';

const map = createMap({
	container: 'map',
	layer: tileLayers.baseLayers.thunderForest.map.transportDark,
	attribution: tileLayers.baseLayers.thunderForest.atribution,
});

const tfAtlas = L.tileLayer(tileLayers.baseLayers.thunderForest.map.mobileAtlas,{
	attribution: tileLayers.baseLayers.thunderForest.atribution,
	maxZoom: 17,
})
const tfTransportDark = L.tileLayer(tileLayers.baseLayers.thunderForest.map.transportDark,{
	attribution: tileLayers.baseLayers.thunderForest.atribution,
})
const capaGMaps = L.tileLayer(
	'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
	{ maxZoom: 30, subdomains: ['mt0', 'mt1', 'mt2', 'mt3'] }
);

const OSM = L.tileLayer(tileLayers.baseLayers.default.map, {
	attribution: tileLayers.baseLayers.default.atribution,
});
const voyager = L.tileLayer(tileLayers.baseLayers.cartoDb.map.voyager,{
	attribution: tileLayers.baseLayers.cartoDb.atribution,
})
const cycleMap = L.tileLayer(tileLayers.overlayers.wayMarkedTrails.cycling)

const overLayers={
cycle: cycleMap
}
const baseLayers = {
	TransportDarkTF: tfTransportDark,
	thunderForestAtlas : tfAtlas,
	Voyager: voyager,
	OSM: OSM,
	GoogleMaps: capaGMaps,
};
const stcIcon = L.icon({
	iconUrl: stcMetro,
	iconSize: [41, 41],
	iconAnchor: [21, 41],
	popupAnchor: [1, -38],
});

L.control.layers(baseLayers, overLayers).addTo(map);

let linesLayer = [];
let markers = [];
let marker = [];
let estaciones = [];
let lineas = [];

export async function createOptionStation(container) {
	const select = document.querySelector('#select-line');
	select.addEventListener('change', async (e) => {
		estaciones = []
		deletedMarker()
		/* if(markers) map.removeLayer(markers); */
		container.innerHTML = ''
		const defaultOption = document.createElement('option')
		defaultOption.setAttribute('label', 'Selecciona una estacion')
		defaultOption.setAttribute('value', -1)
		container.appendChild(defaultOption);
		const id = e.target.value;
		printLines(id);
		if (id && id !== 'all') {
			const { data } = await getStationsByLineRequests(id);
			const ruta = data.ruta
			const stations = data.station;
			stations.map((estacion) => {
				console.log(estacion)
				let estacionTemp = {
					...estacion,
					line:{
						ruta
					}
				}
				estaciones.push(estacionTemp);
				const option = document.createElement('option');
				option.setAttribute('label', estacion.nombre);
				option.setAttribute('value', estacion.id);
				container.appendChild(option);
			});
			console.log(estaciones)
		}
		if (id === 'all') {
			const { data } = await getStationsRequests();
			console.log(data)
			data.map((estacion) => {
				//console.log(estacion)
				estaciones.push(estacion);
				const option = document.createElement('option');
				option.setAttribute('label', `${estacion.lineId}-${estacion.nombre}`);
				option.setAttribute('value', estacion.id);
				container.appendChild(option);
				//polyline = L.polyline(lineas, {color: 'red'}).addTo(map)
			});
		}
		createMarker(container)
	});
}

export async function createOptionLine(container) {
	const { data } = await getLinesRequests();
	data.map((linea) => {
		let coords = linea.geom.coordinates;
		coords.map((coordtemp) => coordtemp.reverse());
		let id = linea.id;
		let temp = {
			coords,
			id,
		};
		lineas.push(temp);
		const option = document.createElement('option');
		option.setAttribute('label', `${linea.id}-${linea.ruta}`);
		option.setAttribute('value', linea.id);
		container.appendChild(option);
	});
}


function createMarker(container){
	container.addEventListener('change', (e) => {
		map.removeLayer(markers)
		console.log(estaciones)
		const value = e.target.value;
	estaciones.map((estacion, i) => {
		if (value === estacion.id) {
			//let coords = estacion.geom.coordinates.reverse();
			let coords = [estacion.geom.coordinates[1], estacion.geom.coordinates[0]]
			markers  = L.marker(coords, { icon: stcIcon , className:'Myicono'})
			.bindPopup(
					`Estacion perteneciente a <b>${estacion.sistema}</b> de la linea <b>${estacion.lineId}</b><br>
				con la ruta <b>${estacion.line?.ruta}</b> <br>
				de tipo <b>${estacion.tipo}</b> con nombre <b>${estacion.nombre}</b> y fundada en el año <b>${estacion.año}</b> `
				)
				//
				map.flyTo(coords, 17);
				markers.addTo(map).openPopup();
		}
	});
});
}
function deletedMarker(){
	map.removeLayer(markers);
}

function printLines(id) {
	if (linesLayer.length) {
		linesLayer.forEach((linea, i) => {
			map.removeLayer(linesLayer[i]);
		});
	} else {
		map.removeLayer(linesLayer);
		linesLayer = [];
	}
	if (id !== 'all') {
		lineas.forEach((linea, i) => {
			if (id == linea.id) {
				linesLayer = L.polyline(linea.coords, {
					className: `linea-${linea.id}`,
					value: linea.id,
				});
			}
		});
		map.addLayer(linesLayer);
		map.fitBounds(linesLayer.getBounds());
	} else {
		lineas.forEach((linea, i) => {
			linesLayer.push(
				L.polyline(linea.coords, {
					className: `linea-${linea.id}`,
					value: linea.id,
				})
				);
				map.addLayer(linesLayer[i]);
		});
		map.fitBounds([
			[19.282085, -98.959007],
			[19.539036, -99.220276],
		]);
	}

}

var circle = L.circle([19.432748, -99.133195], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 100,
}).addTo(map);

circle.bindPopup('Plaza del zolaco en el centro de la ciudad de mexico');

var popup = L.popup()
	.setLatLng([19.434528, -99.133093])
	.setContent('Por favor, selecciona una linea, espera a que cargen las estaciones y selecciona una para comenzar')
	.openOn(map);

var popup = L.popup();

function onMapClick(e) {
	popup.setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(map);
}

map.on('click', onMapClick);
