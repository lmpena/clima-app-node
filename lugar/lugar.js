const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUlr = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '256cca463cmshe9e32f3304dbb95p171d01jsna3fe21625634' }
    });

    const resp = await instance.get();

    if (resp.data.Results === null || resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir} `)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

};

module.exports = {
    getLugarLatLng
}