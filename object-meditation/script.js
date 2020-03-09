// let weatherApi= "api.openweathermap.org/data/2.5/weather?q=";
// let cityName = "New York";
// let weatherApiKey = "39031965238faf9cf2930953024067c4";
// let url = weatherApi + cityName + "&appid=" + apiKey;

// let newsApi = 'http://newsapi.org/v2/everything?q=';
// let city = 'Apple';
// let newsApiKey = '&from=2020-03-09&sortBy=popularity&apiKey=9fac62d0f8d24cd88ec3c1f6bd10cff0';
// let url = newsApi + city + newsApiKey;
//
// let req = new Request(url);
//
// fetchNews(req)
//     .then(function(response) {
//         console.log(response.json());
//     })
$(document).ready(function() {
  $("#back").hide();
  $("#cityPic").hide();
});


function displayCard() {
  var city = document.getElementById("city").value;
  $("#welcome").html('you have a lovely home in ' + city);
  $("#city-prompt").hide();
  $("#submit").hide();
  $("#back").show();
  $("#cityPic").show();
}



function revert() {
  $("#welcome").html('hi there');
  $("#city-prompt").show();
  $("#submit").show();
  $("#back").hide();
  $("#cityPic").hide();
}
