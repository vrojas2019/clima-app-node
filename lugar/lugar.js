const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeUrl}?json=1`,
        //params: { location: 'New York' },
        //headers: {
        //   'x-rapidapi-key': '6281e3b72fmsh423a5af11a32052p18ceffjsndcf6325989d7',
        // 'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        //}
    });

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.standard.city);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!!', err);
    //     });

    const resp = await instance.get();

    if (resp.data.success == false) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data;
    //const direccion = data.standard.addresst;
    const latitud = data.latt;
    const longitud = data.longt;

    return {
        //direccion,
        latitud,
        longitud
    }
}


module.exports = {
    getLugarLatLng
}