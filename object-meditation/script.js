let weatherApi= "api.openweathermap.org/data/2.5/weather?q=""{city name},{state};
let cityName = "New York";
let stateName = "New York";
let apiKey = "39031965238faf9cf2930953024067c4";
let url = weatherApi + cityName + "," + stateName+ "&appid=" + apiKey




function getPlace() {
  var x = document.getElementById("places").value;
  document.getElementById("placeName").innerHTML = x;
  console.log(x);

  function getWeather() {
    
  }
}
