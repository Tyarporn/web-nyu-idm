
$(document).ready(function() {
  $("#back").hide();
  $("#cityPic").hide();
  $("#newsButton").hide();
  $("#weatherButton").hide();
  $("#weatherName").hide();
  $("#weatherTable").hide();
});

function displayCard(){//dA0uSGspAyNddUPTVDTbyPQLqYhwkUvyjul2KatTooM
  var city = document.getElementById("city").value;
  var bkgImageURL = "assets/bruno-wolff-l5-za_iUUdA-unsplash.jpg";
  fetch("https://api.unsplash.com/search/photos/?query=" + city +"&client_id=dA0uSGspAyNddUPTVDTbyPQLqYhwkUvyjul2KatTooM")
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response);
    bkgImageURL = response.results[0].urls.full;
    console.log(bkgImageURL)
    $("#welcome").html('i hear ' + city + ' is lovely this time of year' + '<a href= marietta.html>.</a>');
    $("#city-prompt").hide();
    $("#submit").hide();
    $("#back").show();
    $("#cityPic").show();
    $("#newsButton").show();
    $("newsTest").show();
    $("#weatherButton").show();
    $("body").css("background-image", "url(" + bkgImageURL + ")");
  })

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
    $("#Humidity").html(response.main.humidity + " %");
    $("#Pressure").html(response.main.pressure + " hPa");
    $("#WindSpeed").html(response.wind.speed + " mph");
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

function lightMode(){
  $('body').css('color', 'antiquewhite');
  $('body').css('font-family', 'georgia');
  $('p').css('color', 'antiquewhite');
  $('a').css('color', 'antiquewhite');
  $('button').css('background', 'linear-gradient(to bottom, antiquewhite 5%, white 100%)')
  $('button').css('font-family', 'georgia');
  $('button').css('color', 'black');
}

function darkMode(){
  $('body').css('color', 'midnightblue');
  $('body').css('font-family', 'futura');
  $('p').css('color', 'midnightblue');
  $('a').css('color', 'midnightblue');
  $('button').css('background', 'linear-gradient(to bottom, blue 5%, midnightblue 100%)')
  $('button').css('font-family', 'futura');
  $('button').css('color', 'cornsilk');
}

function colorfulMode(){
  var color = document.getElementById("myColor").value
  $('body').css('color', color);
  $('body').css('font-family', 'courier');
  $('p').css('color', color);
  $('a').css('color', color);
  $('button').css('background', 'linear-gradient(to bottom, antiquewhite 5%, white 100%)')
  $('button').css('font-family', 'courier');
  $('button').css('color', color);
}
