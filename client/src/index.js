import Template from '@templates/Template.js';
import '@styles/style.css';
import map, { createOptionLine, createOptionStation, fly } from './assets/scripts/map.js'


(async function App() {
	window.addEventListener('load', ()=> {
		document.getElementById('loader').classList.toggle('loader2')
	})
	const main = null || document.getElementById('main');
  main.innerHTML = await Template();
	const stations = document.querySelector('#select-station');
	const lines = document.querySelector('#select-line');
	createOptionStation(stations);
	createOptionLine(lines);

})();

