import { addDomElem } from './helper';

const renderData = (data, localTime) => {
  const newDataArea = document.querySelector('.container.mt-5');
  const mainRow = addDomElem('div', 'class', 'row justify-content-center');
  const col1 = addDomElem('div', 'class', 'col-md-6 col-lg-4');
  const col2 = addDomElem('div', 'class', 'col col-lg-4 col-md-6');
  const row1 = addDomElem('div', 'class', 'row');
  const row2 = addDomElem('div', 'class', 'row');
  const iconBox = addDomElem('div', 'class', 'col');
  const tempBox = addDomElem('div', 'class', 'col');
  const emptyBox = addDomElem('div', 'class', 'col');
  const data1Box = addDomElem('div', 'class', 'col');
  const icon = addDomElem('img', 'class', 'day');
  const temp = addDomElem('p');
  const empty = addDomElem('p');
  const feels = addDomElem('p', 'class', 'text-left my-auto');
  const humid = addDomElem('p', 'class', 'text-left my-auto');
  const wind = addDomElem('p', 'class', 'text-left my-auto');
  const city = addDomElem('p', 'class', 'text-right my-auto');
  const time = addDomElem('p', 'class', 'text-right my-auto');
  const desc = addDomElem('p', 'class', 'text-right my-auto');

  icon.src = `http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`;
  temp.textContent = `${data.temp}°C`;
  feels.textContent = `Feels like: ${data.feelsLike}°C`;
  humid.textContent = `Humidity: ${data.humidity}%`;
  wind.textContent = `Wind: ${data.windSpeed} km/h`;
  city.textContent = `${data.city}, ${data.country}`;
  time.textContent = localTime;
  desc.textContent = `${data.weatherDescription}`;

  iconBox.appendChild(icon);
  tempBox.appendChild(temp);
  emptyBox.appendChild(empty);
  row1.append(iconBox, tempBox, emptyBox);
  data1Box.append(feels, humid, wind);
  row2.appendChild(data1Box);
  col1.append(row1, row2);
  col2.append(city, time, desc);
  mainRow.append(col1, col2);
  newDataArea.appendChild(mainRow);

};

export {renderData};