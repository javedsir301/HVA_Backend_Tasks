const API_KEY = '4838b9c60332fb2b3e8c36a871f9ed6d';
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const currentWeatherContent = document.getElementById('current-weather-content');
const forecastContent = document.getElementById('forecast-content');
const errorMessage = document.getElementById('error-message');
const toggleSearchBar = document.getElementById('toggle-search');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
    }
});

toggleSearchBar.addEventListener('click',() => {
    if (searchForm.style.display === 'none' || searchForm.style.display === ' ') {
        searchForm.style.display ='block';
        
    }else{
        searchForm.style.display='none';
    }

}) ;

async function getWeatherData(city) {
    try {
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);

        if (!currentWeatherResponse.ok || !forecastResponse.ok) {
            throw new Error('City not found');
        }

        const currentWeatherData = await currentWeatherResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(currentWeatherData);
        displayForecast(forecastData);
        errorMessage.classList.add('hidden');
    } catch (error) {
        displayError(error.message);
    }
}

function displayCurrentWeather(data) {
    const { name, main, weather, wind } = data;
    const html = `
        <h3>${name}</h3>
        <p>${new Date().toLocaleDateString()}</p>
        <img src="http://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}" class="weather-icon">
        <p>${Math.round(main.temp)}°C</p>
        <p>${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
    `;
    currentWeatherContent.innerHTML = html;
}

function displayForecast(data) {
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    let html = '';
    dailyForecasts.slice(0, 5).forEach(day => {
        const date = new Date(day.dt * 1000);
        html += `
            <div class="forecast-day">
                <p>${date.toLocaleDateString()}</p>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}">
                <p>${Math.round(day.main.temp)}°C</p>
                <p>${day.weather[0].description}</p>
            </div>
        `;
    });
    forecastContent.innerHTML = html;
}

function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => errorMessage.classList.add('fade-in'), 100);  
    currentWeatherContent.innerHTML = '';
    forecastContent.innerHTML = '';
}
