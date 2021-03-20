import { renderData } from './render-data';

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

    data.temp = Math.round(weatherData.list[0].main.temp);
    data.tempFeelsLike = Math.round(weatherData.list[0].main.feels_like);
    data.humidity = weatherData.list[0].main.humidity;
    data.weatherDescription = weatherData.list[0].weather[0].description;// light rain
    data.weatherIcon = weatherData.list[0].weather[0].icon;
    data.windSpeed = weatherData.list[0].wind.speed;
    data.name = weatherData.city.name;
    data.country = weatherData.city.country;
    data.sunrise = weatherData.city.sunrise;
    data.timezone = weatherData.city.timezone;

    console.log('data fetched: ', data);
    return data;
  } catch (error) {
    console.log('error in weather data');
  }
}

async function fetchData() {

  console.log('inside fetchData');
  const location = document.querySelector('input').value;
  console.log('location: ',location)
  try {
    const data = await fetchWeather(location);
    // const localTime = new Date((data.sunrise + data.timezone) * 1000);
    // renderData(data, localTime);
  } catch (error) {
    console.log('error in fetchData()');
  }
  // location.value = '';
}

const dummy = () => { console.log('dummy function')};

export { dummy, fetchData };