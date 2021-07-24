const request = require('request');
const chalk = require('chalk');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8fa99a598aea4c5c64ba33766b15379e&query='+latitude+','+longitude;
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback(chalk.redBright('Unable to connect to weather service!'), undefined)
        } else if(response.body.error) {
            callback(chalk.redBright('Unable to connect to weather service!'), undefined)
        } else{
            callback(undefined, 'It is currently ' + chalk.inverse.cyan(response.body.current.temperature) + chalk.inverse.cyan(' degrees ') + ' out.\nThe '+chalk.inverse.magentaBright(' weather ') + ' is ' + chalk.magentaBright(response.body.current.weather_descriptions) + '\n' +' |_ '+ chalk.inverse.blueBright(' Wind Speed ')+ ' : ' + chalk.blueBright(response.body.current.wind_speed) +  '\n' +' |__ '+  chalk.inverse.white(' Wind Direction ')+ ' : ' + chalk.white(response.body.current.wind_dir) + '\n' +' |___ '+  chalk.inverse.yellow(' Humidity ') + ' : ' +  chalk.yellow(response.body.current.humidity) + '\n' +' |____ '+  chalk.inverse.magenta(' Visibility ') + ' : ' +  chalk.magenta(response.body.current.visibility))
        }
    })
};
module.exports = forecast;