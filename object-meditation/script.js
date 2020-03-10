//
// let weatherApi= "api.openweathermap.org/data/2.5/weather?q=";
// let cityName = "New York";
// let weatherApiKey = "39031965238faf9cf2930953024067c4";
// let weatherUrl = weatherApi + cityName + "&appid=" + weatherApiKey;
let newsApi = 'http://newsapi.org/v2/everything?q=';
let city = 'Apple';
let newsApiKey = '&from=2020-03-09&sortBy=popularity&apiKey=9fac62d0f8d24cd88ec3c1f6bd10cff0';
let newsUrl = newsApi + city + newsApiKey;

$(document).ready(function() {
  $("#back").hide();
  $("#cityPic").hide();
});

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9fac62d0f8d24cd88ec3c1f6bd10cff0');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
// To query sources
// All options are optional
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
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
