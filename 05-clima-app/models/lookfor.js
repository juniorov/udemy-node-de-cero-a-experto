const fs = require('fs');
const axios = require('axios');

class Lookfor {
    history = [];
    dbPath = './db/database.json';

    constructor() {
        this.readDB();
    }

    get historyCapitalizado() {
        return this.history.map( lugar => {

            let palabras = lugar.split(' ');
            palabras = palabras.map( p => p[0].toUpperCase() + p.substring(1) );

            return palabras.join(' ')

        })
    }

    get paramsMapbox() {
        return {
            'language': 'es',
            'limit': 5,
            'access_token' : process.env.MAPBOX_KEY
        };
    }

    async city(place = '') {
        try {
            //request http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapbox
            });
            const resp = await instance.get();
            return resp.data.features.map(place => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1],
            }));
        }catch(error) {
            console.log('Err', error);
            return [];
        }

        return []; //return the places
    }

    get paramsWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'units',
            'lang': 'es'
        }
    }

    async weatherPlace(lat, lon) {
        this.paramsWeather.lat = lat;
        this.paramsWeather.lon = lon;
        try {
            const instance = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: {...this.paramsWeather, lat, lon}
            });
            const resp = await instance.get();
            const {weather, main} = resp.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            };
        }catch(err) {
            console.log(err);
            return [];
        }
    }

    addHistory(place = '') {
        if(this.history.includes(place.toLocaleLowerCase())) {
            return;
        }

        this.history.unshift(place.toLocaleLowerCase());
        this.saveDB();
    }

    saveDB() {

        const payload = {
            history: this.history
        };

        fs.writeFileSync( this.dbPath, JSON.stringify( payload ) );

    }

    readDB() {

        if( !fs.existsSync( this.dbPath ) ) return;

        const info = fs.readFileSync( this.dbPath, { encoding: 'utf-8' });
        const data = JSON.parse( info );

        this.history = data.history;
    }
}

module.exports = Lookfor;