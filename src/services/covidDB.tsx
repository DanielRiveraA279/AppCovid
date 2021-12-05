import axios from 'axios';

//configuracion de axios
const covidDB = axios.create({
    baseURL: 'https://covid-api.mmediagroup.fr/v1'
});

export default covidDB;