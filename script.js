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
var cityName = "phoenix";
var searchButton = $("#searchButton");
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

//2 - get 5 day forecast based on city 
function getFiveDayForecast (city){

    //TODO use api for getting 5 day forecast
    $.ajax({
        url: queryURL,
        method: "GET"
      })
    //TODO use data from response to populate each card of the 5 day forecast.

} 

//3 - show a list of past city searches
function ShowPastCities() {

    let ul = $("#history");

    for(var x = 0; x < 5; x++){
        //TODO create an instance of a list item
        //TODO Set the value of a list item
        //TODO append list item to UL
    }


}
//(a) list of cities kept somewhere


//3 this function runs to set up things (listeners, etc)
//search button
function init() {
//so listener goes inside
    searchButton.on("click", function(event){
        event.preventDefault();
        cityName =$("enteredCity").val();

        getFiveDayForecast(cityName);

        getCurrentWeather(cityName);

        pastCitySearches.push(cityName);

    })


};


// 1 know that the page needs to be ready and listening for 2 things on load: get weather and forecast
$(document).ready(function() {
    getCurrentWeather(cityName);// 1 we have to pass in the city name to find the current weather for that city.
    getFiveDayForecast (cityName);// 2 we have to pass in the city name to find the 5 day for that city.
    

});
