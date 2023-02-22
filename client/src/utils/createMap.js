import { tileLayers } from './tileLayers';

export function createMap({ container, layer, attribution }) {
	const map = L.map(container).setView(
		[19.432748, -99.133195],
		15
	);

	new L.tileLayer(layer || 'http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 17,
		minZoom: 2,
		attribution: attribution,
	}).addTo(map);

return map;
}


