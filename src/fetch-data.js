import { renderData } from './render-data';

async function getWeather(name) {
  let api = '1627b8ae6ced3746531173abad9b4d06';
  const unit = 'metric';
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=${unit}&APPID=${api}`,
      { mode: 'cors' };
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