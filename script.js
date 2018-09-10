let city = document.querySelector("#title");
let country = document.querySelector("#country");
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let date = document.querySelector('#date');

function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`) // returns a promise

.then(result => {
    return result.json();
})

.then(data => {
        
//        function getDay() {
//            for (let i = 0; i < data.consolidated_weather.length; i++) {
//                day = data.consolidated_weather[i];
//                date.textContent += `${day.applicable_date}, `;    
//                city.textContent = `${data.title},`;
//                country.textContent = `${data.parent.title}`;
//                let min_temp = Math.trunc(`${day.min_temp}`);   
//                let max_temp = Math.trunc(`${day.max_temp}`);    
//                min.textContent += `Min: ${min_temp}\xB0C`;
//                max.textContent += `Max: ${max_temp}\xB0C`;
//             }  
//        }
    
     //   getDay();
                day = data.consolidated_weather[0];
                date.textContent += `${day.applicable_date}`;    
                city.textContent = `${data.title},`;
                country.textContent = `${data.parent.title}`;
                let min_temp = Math.trunc(`${day.min_temp}`);   
                let max_temp = Math.trunc(`${day.max_temp}`);    
                min.textContent += `Min: ${min_temp}\xB0C`;
                max.textContent += `Max: ${max_temp}\xB0C`;

})
.catch(err => 
    console.log(err));
}

getWeather(44418);
//getWeather(946738);
//getWeather(2459115);
