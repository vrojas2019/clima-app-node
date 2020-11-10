const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener clima',
        deman: true
    }
}).argv;

/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(err => {
        console.log('ERROR!!!!', err);
    }); */


/* clima.getClima(19.480599, -99.072845)
    .then(console.log)
    .catch(console.log) */


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coords.latitud, coords.longitud);
        return `El clima de ${direccion} es de ${temp}`
    } catch (e) {
        return `No se pudo determinar el clima`
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);