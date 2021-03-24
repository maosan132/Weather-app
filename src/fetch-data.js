import { renderData, changeBackground } from './render-data';

const flash = document.getElementById('flash'); // for showing errors
const unit = 'metric'; // imperial

async function fetchWeather(location, u) {
  const api = '1627b8ae6ced3746531173abad9b4d06';
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
    flash.style.display = '';
    flash.textContent = '👎 Sorry, there was an error when fetching data';
  }
  return true;
}

const getDate = (sun, time) => {
  const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
  const date = new Date((sun + time) * 1000);

  const localTime = date.toLocaleDateString('en-US', options);
  return localTime;
};

const convertToFahrenheit = () => {
  const button = document.getElementById('units-btn');
  const curUnit = document.getElementById('unitChar');
  let celsValue = document.getElementById('value');
  let farhValue = Math.floor((celsValue.firstChild.textContent * (9 / 5)) + 32);
  button.addEventListener('click', () => {
    [curUnit.textContent, button.textContent] = [button.textContent, curUnit.textContent];
    [celsValue.firstChild.textContent, farhValue] = [farhValue, celsValue.firstChild.textContent];
  });
};

async function fetchData() {
  const location = document.querySelector('input').value;
  flash.style.display = 'none';
  if (location.length > 3) {
    try {
      const data = await fetchWeather(location);
      const localTime = getDate(data.sunrise, data.timezone);
      changeBackground(data.code);
      renderData(data, localTime);
    } catch (error) {
      flash.style.display = '';
      flash.textContent = '👎 Sorry, No data about that location';
    }
  } else {
    flash.style.display = '';
    flash.textContent = '👶 Sorry, city needs to be at least 4 chars';
  }
  convertToFahrenheit();
  document.querySelector('input').value = '';
}

export default fetchData;