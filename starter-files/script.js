/**
 *  STEPS:
 *
 *  1. Declare a class to GET weather data, and GET the woeid, output received data
 *  2. Register an event listener and attach it to the GET requests chain from above, adjust UI loading state
 *  3. Prepare data for the UI in advance and try to use unified structure before outputting to the template
 *  4. Divide classes per function to have a more clean code approach and separation on concerns
 *  5. Add error/loading states and cover edge use cases
 *
 */


 //const API_ENDPOINT = "/api/location/search/?query= + "
let API_ENDPOINT = 'https://www.metaweather.com/api/location';

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