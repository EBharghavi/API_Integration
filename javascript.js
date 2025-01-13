const cityInput = document.getElementById('city'); // Corrected ID
const getWeatherButton = document.getElementById('get-weather');

getWeatherButton.addEventListener('click', function() {
    const city = cityInput.value;
    const apiKey = 'your api key';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Check the API response
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                document.getElementById('weather-info').innerHTML = weatherInfo;
            } else {
                document.getElementById('weather-info').innerHTML = '<p>City not found.</p>';
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('weather-info').innerHTML = '<p>Error fetching weather data.</p>';
        });
});
