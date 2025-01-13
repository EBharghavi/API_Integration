# API_Integration
# Weather Forecast App

This project is a simple weather forecast application that allows users to input a city name and retrieve the current weather conditions using the OpenWeatherMap API. The app fetches weather data and displays the temperature and weather description in Celsius.

## Project Structure

- `index.html`: The main HTML structure of the app.
- `style.css`: The CSS file that styles the app.
- `javascript.js`: The JavaScript file responsible for handling the API request and updating the DOM.

## Features

- Users can input a city name.
- Upon clicking the "Get Weather" button, the app fetches weather data from OpenWeatherMap API.
- The weather information (temperature and description) is displayed on the page.
- If the city is not found, an error message is shown.
- If there is an issue with the fetch operation, an error message is displayed.

## Prerequisites

To run this project, you need:
- A modern web browser (e.g., Chrome, Firefox).
- An active internet connection to fetch data from the OpenWeatherMap API.

## Setup

1. **Clone the repository** (if applicable):

    ```bash
    git clone https://github.com/EBharghavi/API_Integration.git
    ```

2. **Install dependencies** (none required for this project).

3. **API Key**:
   The project uses the OpenWeatherMap API to fetch weather data. You will need to create an account on [OpenWeatherMap](https://openweathermap.org/) and get your own API key. Replace the `apiKey` variable in `javascript.js` with your API key:

   ```javascript
   const apiKey = 'your-api-key';
   ```
4. **Open index.html in your browser to run the application**.
## Usage
1. Enter the name of a city in the input field.  
2. Click the "Get Weather" button to retrieve the current weather data.  
3. The weather information (temperature and weather description) will be displayed below the button.

Example  

For a city like "London", the app will show:
```
Weather in London
Temperature: 15 °C
Weather: Clear sky
```

If the city is not found, it will show:

```
City not found.
```
