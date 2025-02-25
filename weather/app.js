const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temperature');
const desc = document.querySelector('.desc');
const humidity = document.querySelector('.humid');
const wind_speed = document.querySelector('.wind-speed');
const weather_body = document.querySelector(`.weather-body`);

async function checkweather(city){
    const api_key = "e4c271bdffc16ff1fbf828e91d721c58";
    setTimeout(()=>{
        weather_body.style.display = "flex";
    },200);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then((response )=>{return response.json()});
    if(weather_data.cod ==`404`){
        temp.innerHTML = ``;
        desc.innerHTML = ``;
        humidity.innerHTML = ``;
        wind_speed.innerHTML = ``;
        weather_img.src = "asset/404.png";
        setTimeout(()=>{
            weather_body.style.display = "none";
        },1000)
        console.log("error");
        return;
    }
    temp.innerHTML = `${Math.round(weather_data.main.temp-273.15)}`;
    desc.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;
    
    switch(`${weather_data.weather[0].main}`){
        case 'Clouds':
            weather_img.src = "asset/cloud.png";
            break;
        case 'Mist':
            weather_img.src = "asset/mist.png";
            break;
        case 'Clear':
            weather_img.src = "asset/clear.png";
            break;
        case 'Snow':
            weather_img.src = "asset/snow.png";
            break;
        case 'Rain':
            weather_img.src = "asset/rain.png";
            break;
        case 'Haze' :
            weather_img.src = "asset/cloud.png";
    }
    console.log(weather_data);
}
searchBtn.addEventListener('click',()=>{
    checkweather(inputBox.value);
})