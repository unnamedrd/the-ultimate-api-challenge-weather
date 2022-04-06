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


$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: 'https://www.metaweather.com/api/location',
    headers: {
        'Authorization'
    }
});

$("#submitButton").click(function (e) {
$.ajax({
type: "POST",
url: "http://api.openweathermap.org/data/2.5/group?id=2643741,2644688,2633352,2654675,2988507,2990969,2911298,2925535,2950159,3120501,3128760,5128581,4140963,4930956,5106834,5391959,5368361,5809844,4099974,4440906&appid=de6d52c2ebb7b1398526329875a49c57&units=metric",
dataType: "json",
success: function (result, status, xhr) {
//code
});
},
error: function (xhr, status, error) {
alert("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
}
});
});


/*class requestController {
    //method
    addCorsHeader() {
        $.ajaxPrefilter(options => {
            if (options.crossDomain && $.support.cors) {
                options.url = 'https://the-ultimate-api-challenge.herokuapp.com/' + options.url;
            }
        });
    }
    getLocation() {
        this.addCorsHeader();
        $.getJSON(searchAPI_ENDPOINT, { query: 'Seattle' }).done(data => console.log(data));
    }
}
 
const request = new requestController();
    request.getLocation()

/*const searchButton = document.querySelector('searchBox__button');
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
})*/