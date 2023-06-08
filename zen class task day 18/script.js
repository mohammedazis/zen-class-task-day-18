document.addEventListener("DOMContentLoaded", () => {
  const cardsRow = document.getElementById("cards-row");

  // Fetch the data from the REST Countries API
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((countries) => {
      countries.forEach((country) => {
        const { capital, latlng, name, region, flags, cca2 } = country;

        const card = document.createElement("div");
        card.className = "col-lg-4 col-sm-12";

        const cardContent = `
          <div class="card">
            <div class="card-header">${capital}</div>
            <div class="card-body">
              <h5 class="card-title">${name.common}</h5>
              <p class="card-text">Region: ${region}</p>
              <p class="card-text">Country Codes: ${cca2}</p>
              <img src="${flags.png}" alt="Flag" class="card-img-top">
              <button class="btn btn-primary" onclick="fetchWeather('${latlng[0]}', '${latlng[1]}')">Click for Weather</button>
            </div>
          </div>
        `;

        card.innerHTML = cardContent;
        cardsRow.appendChild(card);
      });
    })
    .catch((error) => console.log(error));
});

function fetchWeather(latitude, longitude) {
  // Fetch the weather data from the OpenWeatherMap API using the provided latitude and longitude
  const apiKey = "2a29ee69aaf2362d839d710c94194f01";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((weatherData) => {
      console.log(weatherData); // Handle the weather data as per your requirement
    })
    .catch((error) => console.log(error));
}
