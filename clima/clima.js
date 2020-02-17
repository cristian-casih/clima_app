const axios = require('axios');

const getCLima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a5ded6be5fd2984d7814d9c4c3f0a98d&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getCLima
}