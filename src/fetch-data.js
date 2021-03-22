import { renderData, changeBackground } from './render-data';

async function fetchWeather(location) {
  const api = '1627b8ae6ced3746531173abad9b4d06';
  const unit = 'metric';
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${api}`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    const data = {};
    data.temp = Math.floor(weatherData.list[0].main.temp);
    data.feelsLike = Math.floor(weatherData.list[0].main.feels_like);
    data.humidity = weatherData.list[0].main.humidity;
    data.weatherDescription = weatherData.list[0].weather[0].description;// light rain
    data.weatherIcon = weatherData.list[0].weather[0].icon;
    data.code = weatherData.list[0].weather[0].id;
    data.windSpeed = weatherData.list[0].wind.speed;
    data.city = weatherData.city.name;
    data.country = weatherData.city.country;
    data.sunrise = weatherData.city.sunrise;
    data.timezone = weatherData.city.timezone;
    return data;
  } catch (error) {
    console.log('error in weather data');
  }
}

const getDate = (sun, time) => {
  const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
  const date = new Date((sun + time) * 1000);

  const localTime = date.toLocaleDateString('en-US', options);
  return localTime;
};

async function fetchData() {
  let location = document.querySelector('input').value;
  const flash = document.getElementById('flash');
  flash.style.display = 'none';
  if (location.length > 3) {
    try {
      const data = await fetchWeather(location);
      const localTime = getDate(data.sunrise, data.timezone);
      changeBackground(data.code);
      renderData(data, localTime);
    } catch (error) {
      flash.style.display = '';
      flash.textContent = ' Sorry, No data about that location';
    }
  } else {
    flash.style.display = '';
    flash.textContent = ' Sorry, city needs to be at least 4 chars';
  }

  document.querySelector('input').value = '';
}

export { fetchData };