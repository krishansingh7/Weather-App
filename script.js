const apikey = "3c096cdae4869ddaf12ce7d7395c6172";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var input = document.querySelector(".searchbox input");
var btn = document.querySelector(".btn");
var mainimg = document.querySelector(".main img");

async function weather(city){

    let temp = document.querySelector(".temp");
    let cityname = document.querySelector(".cityname");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");
    const err = document.querySelector(".error");
    

    let response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        err.style.display = "block";
        temp.innerHTML = 0 + "°C";
        cityname.innerHTML = "Find City";
        humidity.innerHTML = 0+ "% <br> Humidity";
        wind.innerHTML = 0 + "Km/h <br> Wind Speed";
    }
    else{
    let data = await response.json();
    console.log(data);
    temp.innerHTML=Math.round(data.main.temp) + "°C";
    cityname.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity + "% <br> Humidity";
    wind.innerHTML=data.wind.speed + "Km/h <br> Wind Speed";

    if(data.weather[0].main == "Clouds"){
        mainimg.src="clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        mainimg.src="clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        mainimg.src="mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        mainimg.src="drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        mainimg.src="rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        mainimg.src="snow.png";
    }
    err.style.display="none";
 }
}

btn.addEventListener("click",()=>{
    weather(input.value);
})
