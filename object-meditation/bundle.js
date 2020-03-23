$(document).ready(function() {
  $("#back").hide();
  $("#cityPic").hide();
  $("#newsButton").hide();
  $("#weatherButton").hide();
  $("#weatherName").hide();
  $("#weatherTable").hide();
});


function displayCard() {
  var city = document.getElementById("city").value;
  $("#welcome").html('i hear ' + city + ' is lovely this time of year' + '<a href= marietta.html>.</a>');
  $("#city-prompt").hide();
  $("#submit").hide();
  $("#back").show();
  $("#cityPic").show();
  $("#newsButton").show();
  $("newsTest").show();
  $("#weatherButton").show();

}

function revert() {
  location.reload();
}

function getWeather(){//api.openweathermap.org/data/2.5/weather?q=NewYork&appid=39031965238faf9cf2930953024067c4
  $("#newsTest").hide();
var city = document.getElementById("city").value.toString();
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=39031965238faf9cf2930953024067c4")
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response);
    $("#name").html(response.name);
    $("#CityName").html(response.name);
    $("#Temperature").html(response.main.temp + " F");
    $("#Humidity").html(response.main.humidity);
    $("#Pressure").html(response.main.pressure);
    $("#WindSpeed").html(response.wind.speed);
    $("#Weather").html(response.weather[0].description);
  })
  $("#weatherName").show();
  $("#weatherTable").show();
}

function getNews(){
  $("#weatherName").hide();
  $("#weatherTable").hide();
  $("#newsTest").show();
  var city = document.getElementById("city").value.toString();
  fetch("https://newsapi.org/v2/everything?q=" + city + "&apiKey=9fac62d0f8d24cd88ec3c1f6bd10cff0")
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
      var newsTitles = [];
      var newsString = "";
      var newsLink = [];
      for(i = 0; i < response.articles.length; i++){
        console.log(response.articles[i].title);
        newsTitles.push(response.articles[i].title);
        newsLink.push(response.articles[i].url);
      }
      for(i = 0; i < newsTitles.length; i++)
      newsString= newsString + (i+1) + ". " +"<a href="  + newsLink[i] + ">" + newsTitles[i]+ "</a>" + "<br>";
      $("#newsTest").html(newsString);
    })
}
