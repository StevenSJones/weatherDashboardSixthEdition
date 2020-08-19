$(document).ready(function() {
  init();
    
//4 global variables
var cityName = $(this).attr("data-name");
// var searchButton = $("#searchButton");
let pastCitySearches = [];


//upon page load 3 things happen:
// 1 - get current weather based on city 
function getCurrentWeather(){
    var apiKey = "8bbeb41510dd325ec13385f22fb87563";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid=" + apiKey; 
    

//TODO use api for getting current weather
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        console.log(response)
      })

//TODO use data from response to populate the different weather fields.
}
 // Function for displaying movie data
 function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#history").empty();

    // Looping through the array of movies
    for (var i = 0; i < pastCitySearches.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of movie-btn to our button
      a.addClass("city-btn");
      // Adding a data-attribute
      a.attr("data-name", pastCitySearches[i]);
      // Providing the initial button text
      a.text(pastCitySearches[i]);
      // Adding the button to the buttons-view div
      $("#history").append(a);
    }
  }

//2 - get 5 day forecast based on city 
// function getFiveDayForecast (cityName){
//     var apiKey = "8bbeb41510dd325ec13385f22fb87563";
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&appid=" + apiKey; 

    //TODO use api for getting 5 day forecast
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response){
    //     console.log(response)
    //   })
    //TODO use data from response to populate each card of the 5 day forecast.

// } 

//3 - show a list of past city searches
// function ShowPastCities() {

//     let ul = $("#history");

//     for(var x = 0; x < 5; x++){
//         //TODO create an instance of a list item
//         //TODO Set the value of a list item
//         //TODO append list item to UL
//     }


// }
//(a) list of cities kept somewhere


//3 this function runs to set up things (listeners, etc)
//search button
function init() {
//so listener goes inside
   $("#searchButton").on("click", function(event){
        event.preventDefault();
        cityName = $("#enteredCity").val().trim();

        //getFiveDayForecast(cityName);

        getCurrentWeather(cityName);

        pastCitySearches.push(cityName);

    })

}
})
