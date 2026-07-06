//let BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=4010be8ef5c1bc8a347272cdb09068dc&units=metric";

let city = document.querySelector(".inputLocation");

let temperature = document.querySelector(".temperature");
let feelsLike = document.querySelector(".feelslike");
let dayNight = document.querySelector(".dayNight");
let windSpeed = document.querySelector(".windSpeed");
let latitude = document.querySelector(".latitude");
let longitude = document.querySelector(".longitude");
let btn = document.querySelector("button");
let video = document.querySelector(".video");

btn.addEventListener("click", async () => {
    let location = document.querySelector(".location");
    location.innerText = city.value;
    let response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${location.innerText}&appid=4010be8ef5c1bc8a347272cdb09068dc&units=metric`
    ); //It returns a resolved promise
    let data = await response.json(); //Converts that resolved promise into json frmat and object is stored in data.
    console.log(data);
    location.innerText = city.value + ", " + data.sys.country;
    temperature.innerText = data.main.temp + "°C";
    feelsLike.innerText = "Feels Like: " + data.main.feels_like + "°C";
    windSpeed.innerText = "Wind Speed: " + data.wind.speed * 2.273 + "mph";
    longitude.innerText = "Longitude: " + data.coord.lon + "°";
    latitude.innerText = "Latitude: " + data.coord.lat + "°";
    if (data.weather[0].icon.endsWith("n")) {
        dayNight.innerText = "Night";
        video.src = "BgVideos/nightCloudy.mp4";
    } else {
        dayNight.innerText = "Day";
        video.src = "BgVideos/dayCloudy.mp4";
    }
});