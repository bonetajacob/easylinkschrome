// Future JavaScript will go here
import { config } from './config'

var weather;
function setup() {
  createCanvas(400,200);
  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid='+ config.apiKey + '&units=imperial',gotData);
}

function gotData(data)  {
  //println(data);
  weather = data;
}

function draw() {
    background(0);
    if (weather) {
      
      text(weather.main.temp,10,50);
      text(weather.main.humidity,10,50);
    }
}