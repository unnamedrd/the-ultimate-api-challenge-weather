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
const API_ENDPOINT = 'https://www.metaweather.com//api/location/search/?query=rome';
const searchAPI_ENDPOINT = "${API_ENDPOINT}/search"
const searchBtn = document.querySelector(".searchBox__button");


searchBtn.addEventListener('click', runAPI)

function runAPI() {
    fetch(API_ENDPOINT, { mode: 'no-cors' })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            //console.log(`error ${err}`)
        });
}
