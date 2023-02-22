import logo from '@images/prueba.png'
const Template = async () => {

  const view = `
				<header>
				<select name="select-location" id="select-line">
					<option value="-1" >Selecciona una linea</option>
					<option value="all" >Todas las lineas</option>
				</select>
				<select name="select-location" id="select-station">
					<option value="-1" >Espera por las opciones</option>
				</select>
				<img src="${logo}" class="logo">
				</header>

  `;
  return view;
};

export default Template;
