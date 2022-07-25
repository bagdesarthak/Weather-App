let weather = {
        apiKey: "33b1cb783d4d628a66b1219700a0df6f",
        apiKey1: "9f2e6c9f62d46242492438796d15ee99",
        apiKey2: "d9c19e9a1c6b3d5daaae162118fce76f",
        fetchWeather: function (city) {
                fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city
                        + "&units=metric&appid="
                        + this.apiKey)
                        .then((response) => response.json())
                        .then((data) => {
                                console.log(data);
                                return this.displayWeather(data)
                        });
        },
        displayWeather: function (data) {
                const { name } = data;
                const { icon, description } = data.weather[0];
                const { temp, humidity } = data.main;
                const { speed } = data.wind;
                console.log(name, icon, description, temp, humidity, speed)

                document.querySelector(".city").innerText = "Weather in " + name;
                document.querySelector(".icon").src = "https://openweathermap.org/img/w/" + icon + ".png";
                document.querySelector(".description").innerText = description;
                document.querySelector(".temp").innerText = temp + "°C";
                document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
                document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
                
                document.querySelector(".weather").classList.remove("loading");

                document.body.style.backgroundImage =
                        "url('https://source.unsplash.com/1600x900/?" + description + "')";
        },
        search: function () {
                this.fetchWeather(document.querySelector(".searchBar").value);
        },
};

weather.fetchWeather("indore")

document.querySelector(".search button").addEventListener("click", function () {
        weather.search();
});
   
document
        .querySelector(".searchBar")
        .addEventListener("keyup", function (event) {
                if (event.key == "Enter") {
                        weather.search();
                }
        });

 