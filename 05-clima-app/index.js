require('dotenv').config();

const { readInput, inquirerMenu, pause, listPlaces } = require('./helpers/inquirer');
const Lookfor =  require('./models/lookfor');

const main = async() => {
    const lookfor = new Lookfor();
    let opt;

    do{
        opt = await inquirerMenu();

        switch(opt) {
            case 1:
                const search = await readInput('Place: ');
                const places = await lookfor.city(search);
                const id = await listPlaces(places);

                if(id === '0' ) continue;

                const placeChoosen = places.find( p => p.id == id);
                lookfor.addHistory(placeChoosen.name);

                const weather = await lookfor.weatherPlace(placeChoosen.lat, placeChoosen.lng);
                console.log("City: "+ placeChoosen.name);
                console.log("Lat: "+ placeChoosen.lat);
                console.log("Lng: "+ placeChoosen.lng);
                console.log("Temp: "+ weather.temp);
                console.log("Min: "+ weather.min);
                console.log("Max: "+ weather.max);
                console.log("How is the weather: "+ weather.desc);
                break;
            case 2:
                lookfor.historyCapitalizado.forEach((place, index) => {
                    const idx = `${index+1}.`.green;
                    console.log(`${idx} ${place}`);
                })
                break;
        }

        if ( opt !== 0 ) await pause();

    } while ( opt !== 0 )
}

main();