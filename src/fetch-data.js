import { renderData } from './render-data';

async function fetchWeather(name) {
  const api = '1627b8ae6ced3746531173abad9b4d06';
  const unit = 'metric';
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=${unit}&APPID=${api}`, { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);

    let data = {};
    console.log(data);
    return data;
  } catch (error) {
    console.log('error');
  }
}

async function fetchData(e) {

  console.log('inside fetchdata');
  const location = document.querySelector('input').value;
  try {
    const data = await fetchWeather(location);
    const localTime = await fetchLocalTime(data.lat, data.lon);
    renderData(data, localTime);
  } catch (error) {
    console.log('error in fetchData()');
  }
  location.value = "";
}

export default fetchData;