import axios from 'axios';
export const getStationsRequests = async () => await axios.get('/api/v1/stations')
export const getStationsByLineRequests = async (id) => await axios.get('/api/v1/lines/' + id)
export const getLinesRequests = async () => await axios.get('/api/v1/lines')
