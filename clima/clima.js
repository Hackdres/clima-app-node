/**
 * 
 */
const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8189d2742a3cf80be4ea1ae416013a93`)

    let temp = resp.data.main.temp;

    return temp;
}

module.exports = {
    getClima
}