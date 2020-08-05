const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bade7b16abb17bdc56fb243906359a85&units=metric`)
    return resp.data.main.temp;
};

module.exports = {
    getClima
}