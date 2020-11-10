const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=34d972fa8bdef379539044a39a237b12&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}