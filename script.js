//ready function on the entire doc
$(document).ready(function () {
  var cityName = "Phoenix";
  var lat;
  var lon;
  var searchButton = $("#searchButton");
  let pastCitySearches = [];

  //upon page load 3 things happen:
  // 1 - get current weather based on city
  function getCurrentWeather(city) {
    var apiKey = "8bbeb41510dd325ec13385f22fb87563";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial" +
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
      var pOne = $("<p>").text("Temperature: " + temp + " | ");
      //appending the pOne var to the weatherDiv
      weatherDiv.append(pOne);

      //Assigning the response for the humidity to a var
      var humidity = response.main.humidity;
      //concatenating the text for the humidity response
      var pTwo = $("<p>").text("Humididty: " + humidity + " | ");
      //appending the pOne var to the weatherDiv
      weatherDiv.append(pTwo);

      //Assigning response for the wind speed to a var
      var windspeed = response.wind.speed;
      //concatenating the text for the humidity response
      var pThree = $("<p>").text("Windspeed: " + temp + " | ");
      //appending the pOne var to the weatherDiv
      weatherDiv.append(pThree);

      //assigning response for the latitude
      var lat = response.coord.lat;

      var pFour = $("<p>").text("latitude: " + lat);

      lon = response.coord.lon;

      var pFour = $("<p>").text("longitude: " + lon + " | ");

      $("#todaysWeather").append(weatherDiv);

      getFiveDayForecast(lat, lon);
    });
  }
 // TODO use data from response to populate each card of the 5 day forecast.
  // 2 - get 5 day forecast based on city
  function getFiveDayForecast(lat, lon) {
    var apiKey = "8bbeb41510dd325ec13385f22fb87563";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/onecall?" +
      "lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=imperial" +
      "&appid=" +
      apiKey;

    // TODO use api for getting 5 day forecast
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(
      function (response) {
        var date, icon, temp, humidity;
        console.log("5 day forecast response: ", response);
        for (i = 0; i < response.daily.length; i++) {
          //
          date = moment.unix(response.daily[i].dt);
          icon = response.daily[i].weather[0].icon;

          temp = response.daily[i].temp.day;
          humidity = response.daily[i].humidity;
          $("#date" + (i + 1)).text(date); //dt-text convert format to mm/dd/yyyy
          $("#icon" + (i + 1)).attr(
            "src",
            "http://openweathermap.org/img/w/" + icon + ".png"
          ); //convert UTF8 value
          $("#temp" + (i + 1)).text(temp);
          $("#humidity" + (i + 1)).text(humidity);
        }

        var fiveDayDiv = $("<div id = 'forecasts'>");
        //append the pOne var to the weatherDiv
        // fiveDayDiv.append(divOne);
        // fiveDayDiv.append(divTwo);
      }
     
    );
  }

  //3 - show a list of past city searches
  // function ShowPastCities() {

  //3 this function runs to set up things (listeners, etc)
  //search button
  function init() {
    searchButton.on(
      "click",
      function (event) {
        event.preventDefault();
        cityName = $("#enteredCity").val().trim();
        // console.log("cityname " + cityName)

        getCurrentWeather(cityName);

        //create a  button el with jquery
        var pastCItyList = $("<button>");

        //adding a class
        pastCItyList.attr("class", "cityButton");
        //take the button element and set value equal to cityName
        pastCItyList.val(cityName);
        //take the button element and set text equal to cityName
        pastCItyList.text(cityName);

        var listEl = $("<li>");
        listEl.append(pastCItyList);

        //add the button to the page to the div=#leftPanel
        $("#leftPanel").append(listEl);
        //send city name to local storage
      }
    );
    //TODO-load pastCitySearches from local storage
  }

  init();
  getCurrentWeather(cityName);
  $(document).on("click", ".cityButton", function () {
    //console.log($(this).val());
    console.log("Made it this far!");
    getCurrentWeather($(this).val()); //grab weather with the value from my button
  });
});
