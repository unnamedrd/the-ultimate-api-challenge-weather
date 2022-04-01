/**
 *  STEPS:
 *
 *  1. Declare a class to GET weather data, and GET the woeid, output received data
 *  2. Register an event listener and attach it to the GET requests chain from above, adjust UI loading state
 *  3. Prepare data for the UI in advance and try to use unified structure before outputting to the template
 *  4. Divide classes per function to have a more clean code approach and separation on concerns
 *  5. Add error/loading states and cover edge use cases
 *  the API works in two steps first get the location WOEID, then the API uses the WOEID to match and fetch the weather data by looking up the WOEID 
 */
const API_ENDPOINT = 'https://www.metaweather.com/api/location';
const searchAPI_ENDPOINT = "${API_ENDPOINT}/search"

class requestController{
     
 }

const searchButton = document.querySelector('searchBox__button');
 //const API_ENDPOINT = "/api/location/search/?query= + "


$(document).ready(function () {
    $('.searchBox__button').click(function (e) {
        $.getJSON(API_ENDPOINT, function () {
            $().html(`<p>location_type</p>`);
            $().html(`<p>weather_state_name</p>`);
            $().html(`<p>(min|max|the)_temp</p>`);
            
        })
    })
})


$.getJSON(API_ENDPOINT, {

}).done(function (data, status, xhr) {
    
})

searchButton.addEventListener('click', function () {
    console.log("search button was clicked")
})