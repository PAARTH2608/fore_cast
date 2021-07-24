const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

const address = process.argv[2];
if(!address){
    console.log(chalk.inverse.redBright('Please provide an Address'))
} else { 
    geocode(address, (error, data) => {
        if(error){
            return console.log(error);
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(chalk.inverse.greenBright(data.location));
            console.log(forecastData);
        });
    });
}

