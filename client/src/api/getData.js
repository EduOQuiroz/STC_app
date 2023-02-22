import axios from 'axios';
export const getStationsRequests = async () => await axios.get('https://stcapp-production.up.railway.app/api/v1/stations')
export const getStationsByLineRequests = async (id) => await axios.get('https://stcapp-production.up.railway.app/api/v1/lines/' + id)
export const getLinesRequests = async () => await axios.get('https://stcapp-production.up.railway.app/api/v1/lines')
