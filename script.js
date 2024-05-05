const apikey = "34dd7442ff6fe888f9549ab12377512a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    }
    else {

        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".hummidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "/Weather-Website/images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "/Weather-Website/images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "/Weather-Website/images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/Weather-Website/images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "/Weather-Website/images/mist.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "/Weather-Website/images/snow.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"

    }




}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
