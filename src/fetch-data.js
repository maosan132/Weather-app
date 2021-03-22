import { renderData } from './render-data';
import { input } from './index';

async function fetchWeather(location) {
  const api = '1627b8ae6ced3746531173abad9b4d06';
  const unit = 'metric';
  try {
    console.log('inside fetchWeather');
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${api}`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    console.log('json: ', weatherData);
    const data = {};
    data.temp = Math.floor(weatherData.list[0].main.temp);
    data.feelsLike = Math.floor(weatherData.list[0].main.feels_like);
    data.humidity = weatherData.list[0].main.humidity;
    data.weatherDescription = weatherData.list[0].weather[0].description;// light rain
    data.weatherIcon = weatherData.list[0].weather[0].icon;
    data.windSpeed = weatherData.list[0].wind.speed;
    data.city = weatherData.city.name;
    data.country = weatherData.city.country;
    data.sunrise = weatherData.city.sunrise;
    data.timezone = weatherData.city.timezone;
    console.log('data fetched: ', data);
    return data;
  } catch (error) {
    console.log('error in weather data');
  }
}

const getDate = (sun, time) => {
  const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
  const date = new Date((sun + time) * 1000);

  const localTime = date.toLocaleDateString('en-US', options);
  console.log('localTime: ', localTime);
  return localTime;
};

async function fetchData() {
  //if (!input.value) console.log('yay ',document.querySelector('input'););
  console.log('inside fetchData');
  const location = document.querySelector('input').value;
  const flash = document.getElementById('flash');
  flash.style.display = 'none';
  console.log('location: ', location);
  if (location.length > 3) {
    try {
      const data = await fetchWeather(location);
      const localTime = getDate(data.sunrise, data.timezone);
      renderData(data, localTime);
    } catch (error) {
      console.log('error in fetchData()');
      flash.textContent = ' Error, No data about that location';
    }
  } else {
    flash.style.display = '';
    flash.textContent = ' Error, city needs to be at least 4 chars';
  }

  // location.value = '';
}

const dummy = () => { console.log('dummy function'); };

export { dummy, fetchData };