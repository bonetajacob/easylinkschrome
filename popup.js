// Future JavaScript will go here
var weather;
function setup() {
  createCanvas(400,400);
  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8e4e30cdc0202200584cdd65fd24c743&&units=imperial',gotData);
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