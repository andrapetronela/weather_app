let city = document.querySelector("#title");
let country = document.querySelector("#country");
let min = document.querySelector('#min');
let max = document.querySelector('#max');

function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`) // returns a promise

.then(result => {
    //console.log(result)
    return result.json();
})

.then(data => {
    //console.log(data)
    
    const today = data.consolidated_weather[0];
    city.textContent = `${data.title},`;
    country.textContent = `${data.parent.title}`;
    let min_temp = Math.trunc(`${today.min_temp}`);
        
    let max_temp = Math.trunc(`${today.max_temp}`);
        
    min.textContent = `Min: ${min_temp}\xB0C`;
    max.textContent = `Max: ${max_temp}\xB0C`;
    //forecast.textContent = (`Temperatures in ${data.title} stay between ${min_temp} and ${max_temp} degrees.`);
})
.catch(err => 
    console.log(err));

}

getWeather(44418);
