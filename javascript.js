let weather = {
    "apiKey": "4d6aeec1870375461b0e5d6f9e958f23",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=4d6aeec1870375461b0e5d6f9e958f23"
        
        ).
        then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const{ name }= data;
        const{icon, description}= data.weather[0];
        const{temp, temp_min, temp_max, humidity}= data.main;
        const{speed}= data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in "+ name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".max").innerText = Math.floor(temp_max)+ "°C"+"-"+Math.floor(temp_min)+ "°C";
        document.querySelector(".temp").innerText = Math.floor(temp)+ "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity+ "%";
        document.querySelector(".wind").innerText = "Wind Speed: "+speed+ " Kmph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
        },
        search: function(){
            this.fetchWeather(document.querySelector(".search-bar").value);
        }
};

document.querySelector(".search button").addEventListener("click",function(){
            weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", (e)=> {
if(e.keyCode === 13)
weather.search();

});

weather.fetchWeather("NEW YORK");