// Future JavaScript will go here
var weather;
function setup() {
  createCanvas(400,400);
  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid='+ config.apiKey + '&units=imperial',gotData);
}

function gotData(data)  {
  //println(data);
  weather = data;
}

function draw() {
    background(0);
    if (weather) {
      ellipse(100,100,weath.main.temp, weather.main.temp)
      ellipse(300,100,weath.main.humidity, weather.main.humidity)
    }
}