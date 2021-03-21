import { addDomElem, addDomCustom } from './helper';

const renderData = () => {
  const newdataArea = document.querySelector('.container.mt-5');
  const mainRow = addDomElem('div', 'class', 'row justify-content-center' )
  const col1 = addDomElem('div', 'class', 'col-md-6 col-lg-4' ) -
  const col2 = addDomElem('div', 'class', 'col col-lg-4 col-md-6')
  const row1 = addDomElem('div', 'class','row') -
  const row2 = addDomElem('div', 'class','row')
  const imageBox = addDomElem('div', 'class','col') -
  const tempBox = addDomElem('div', 'class','col')
  const emptyBox = addDomElem('div', 'class','col')
  const data1Box = addDomElem('div', 'class','col')
  const img = addDomElem('img', 'class','day')
  const temp = addDomElem('p'); -
  const empty = addDomElem('p');
  const feels = addDomElement('p', 'class', 'text-left my-auto'); -
  const humi = addDomElement('p', 'class', 'text-left my-auto');
  const wind = addDomElement('p', 'class', 'text-left my-auto');
  const city = addDomElement('p', 'class', 'text-right my-auto');
  const time = addDomElement('p', 'class', 'text-right my-auto');
  const clim = addDomElement('p', 'class', 'text-right my-auto');


};

addDomElem = (tag, att, name, content)

export {renderData};

/*
<div class="row justify-content-center d-none">
    <div class="col-md-6 col-lg-4">
        <div class="row">
            <div class="col"><img /></div>
            <div class="col">
                <p style="text-align: left;font-size: 50px;">23°C</p>
            </div>
            <div class="col">
                <p></p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p class="text-left my-auto">Feels like: 30°C</p>
                <p class="text-left my-auto">Humidity: 88%</p>
                <p class="text-left my-auto">Wind: 8 km/h</p>
            </div>
        </div>
    </div>
    <div class="col col-lg-4 col-md-6">
        <p class="text-right my-auto" style="font-size: 24px;">Santiago de Cali, CO</p>
        <p class="text-right my-auto">Thursday 9:00 AM</p>
        <p class="text-right my-auto">Soft rain</p>
    </div>
</div>
*/