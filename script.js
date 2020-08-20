// 1 GIVEN a weather dashboard with form inputs
// 2 WHEN I search for a city
// 3 THEN I am presented with current and future conditions for that city and that city is added to the search history
// 4 WHEN I view current weather conditions for that city
// 5 THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// 6 WHEN I view the UV index
// 7 THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// 8 WHEN I view future weather conditions for that city
// 9 THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// 10 WHEN I click on a city in the search history
// 11 THEN I am again presented with current and future conditions for that city
// 12 WHEN I open the weather dashboard
// 13 THEN I am presented with the last searched city forecast



//==============================================================
//1. upon page load, supossed to show a default city's current weather and 5 day forecast.

//2. there is an input field for looking up a specific city's current weather and 5 day forecast.

//3. There is a list of past city searches
//4 global variables
$(document).ready(function () {
  //getFiveDayForecast (cityName);// 2 we have to pass in the city name to find the 5 day for that city.

  var cityName = " ";
  var searchButton = $("#searchButton");
  let pastCitySearches = [];

  //upon page load 3 things happen:
  // 1 - get current weather based on city
  function getCurrentWeather(city) {
    var apiKey = "8bbeb41510dd325ec13385f22fb87563";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey;


    //TODO use api for getting current weather
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      //TODO use data from response to populate the different weather fields.
      //create the div for the elements that I am creating to be housed in
      var weatherDiv = $("<div class = 'weather'>");

      //Assigning the response for the temp to a var
      var temp = response.main.temp;
      //concatenating the text for the humidity response
      var pOne = $("<p>").text("Temperature: " + temp);
      //appending the pOne var to the weatherDiv
      weatherDiv.append(pOne);

      //Assigning the response for the humidity to a var
      var humidity = response.main.humidity;
      //concatenating the text for the humidity response
      var pTwo = $("<p>").text("Humididty: " + humidity);
      //appending the pOne var to the weatherDiv
      weatherDiv.append(pTwo);

      //Assigning response for the wind speed to a var
      var windspeed = response.wind.speed;
      //concatenating the text for the humidity response
      var pThree = $("<p>").text("Windspeed: " + temp);
      //appending the pOne var to the weatherDiv
      weatherDiv.append(pThree);

      var lat = response.coord.lat; 
      
      var pFour = $("<p>").text("latitude: " + lat);

      var lon = response.coord.lon;
      

      var pFour = $("<p>").text("longitude: " + lon);
      getFiveDayForecast(lat,lon);
      $("#todaysWeather").append(weatherDiv);
    });
  }
  // https://api.openweathermap.org/data/2.5/https://api.openweathermap.org/data/2.5/onecall?lat=undefined&lon=undefined&?q=&appid=8bbeb41510dd325ec13385f22fb87563


  // 2 - get 5 day forecast based on city
  function getFiveDayForecast (lat,lon){
    var apiKey = "8bbeb41510dd325ec13385f22fb87563";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" +lon +
      "&appid=" +
      apiKey;

      
    
  // TODO use api for getting 5 day forecast
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      console.log(response)

      var fiveDayDiv = $("<div id = 'forecasts'>");
      
      //concatenating the text for the humidity response
      var divOne = $("<p>").text("Latitude: " + lat);

      //concatenating the text for the humidity response
      var divTwo = $("<p>").text("Longitude: " + lat);
      //appending the pOne var to the weatherDiv
      fiveDayDiv.append(divOne);
      fiveDayDiv.append(divTwo);
      
    }
  // TODO use data from response to populate each card of the 5 day forecast.

    )}

  //3 - show a list of past city searches
  // function ShowPastCities() {

  //     let ul = $("#history");

  //     for(var x = 0; x < 5; x++){
  //TODO create an instance of a list item
  //TODO Set the value of a list item
  //TODO append list item to UL
  //     }

  searchButton.on(
    "click",
    function (event) {
      event.preventDefault();
      cityName = $("#enteredCity").val().trim();
        console.log("cityname " + cityName)
      //getFiveDayForecast(lat,lon);

      getCurrentWeather(cityName);

      //create a  button el with jquery

      //add the city name to the button element

      //add the button to the page to the div=#leftPanel

      //send city name to local storage


      
    }
    //so listener goes inside
  );
});

// }
//(a) list of cities kept somewhere
//========================================================

//3 this function runs to set up things (listeners, etc)
//search button
function init() {}
