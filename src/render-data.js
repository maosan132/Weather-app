import { addDomElem, autoFocus } from './helper';

const renderData = (data, localTime) => {
  const newDataArea = document.querySelector('.container.mt-5');
  newDataArea.innerHTML = '';
  const mainRow = addDomElem('div', 'class', 'row justify-content-center rounded p-1 pb-4');
  mainRow.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
  const col1 = addDomElem('div', 'class', 'col-md-6 col-lg-4');
  const col2 = addDomElem('div', 'class', 'col col-lg-4 col-md-6');
  const row1 = addDomElem('div', 'class', 'row');
  const row2 = addDomElem('div', 'class', 'row');
  const iconBox = addDomElem('div', 'class', 'col');
  const tempBox = addDomElem('div', 'class', 'col');
  const emptyBox = addDomElem('div', 'class', 'col d-none d-md-block');
  const data1Box = addDomElem('div', 'class', 'col');
  const icon = addDomElem('img', 'class', 'float-left');
  const temp = addDomElem('p', 'class', 'h1 display-1');
  const empty = addDomElem('p');
  const feels = addDomElem('p', 'class', 'text-left my-auto h5');
  const humid = addDomElem('p', 'class', 'text-left my-auto h5');
  const wind = addDomElem('p', 'class', 'text-left my-auto h5');
  const city = addDomElem('p', 'class', 'text-right my-auto h4 pt-3');
  const time = addDomElem('p', 'class', 'text-right my-auto h5');
  const desc = addDomElem('p', 'class', 'text-right my-auto h5');

  icon.src = `http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`;
  temp.textContent = `${data.temp}°C`;
  feels.textContent = `Feels like: ${data.feelsLike}°C`;
  humid.textContent = `Humidity: ${data.humidity}%`;
  wind.textContent = `Wind: ${data.windSpeed} km/h`;
  city.textContent = `${data.city}, ${data.country}`;
  time.textContent = localTime;
  desc.textContent = `${data.weatherDescription} (code ${data.code})`;

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

  autoFocus('input');
};


const changeBackground = (code) => {
  const bg = document.querySelector('section');
  const wGroup = code.toString()[0];

  switch (wGroup) {
    case '2':
      bg.style.background = 'url("./200.jpg") center center / cover no-repeat';
      break;
    case '3':
      bg.style.background = 'url("./300.jpg") center center / cover no-repeat';
      break;
    case '5':
      if (code === 500) {
        bg.style.background = 'url("./500.jpg") center center / cover no-repeat';
      } else if (code === 501) {
        bg.style.background = 'url("./501.jpg") center center / cover no-repeat';
      } else if (code === 502) {
        bg.style.background = 'url("./502.jpg") center center / cover no-repeat';
      } else {
        bg.style.background = 'url("./503.jpg") center center / cover no-repeat';
      }
      break;
    case '6':
      bg.style.background = 'url("./600.jpg") center center / cover no-repeat';
      break;
    case '7':
      bg.style.background = 'url("./701.jpg") center center / cover no-repeat';
      break;
    case '8':
      if (code === 800) {
        bg.style.background = 'url("./800.jpg") center center / cover no-repeat';
      } else if (code === 801) {
        bg.style.background = 'url("./801.jpg") center center / cover no-repeat';
      } else if (code === 802) {
        bg.style.background = 'url("./802.jpg") center center / cover no-repeat';
      } else if (code === 803) {
        bg.style.background = 'url("./803.jpg") center center / cover no-repeat';
      } else {
        bg.style.background = 'url("./804.jpg") center center / cover no-repeat';
      }
      break;
    default:
      break;
  }
};
export { renderData, changeBackground };