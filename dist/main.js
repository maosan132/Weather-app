/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetch-data.js":
/*!***************************!*\
  !*** ./src/fetch-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dummy\": () => (/* binding */ dummy),\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _render_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-data */ \"./src/render-data.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nasync function fetchWeather(location) {\n  const api = '1627b8ae6ced3746531173abad9b4d06';\n  const unit = 'metric';\n  try {\n    console.log('inside fetchWeather');\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${api}`,\n      { mode: 'cors' },\n    );\n    const weatherData = await response.json();\n    console.log('json: ', weatherData);\n    const data = {};\n    data.temp = Math.floor(weatherData.list[0].main.temp);\n    data.feelsLike = Math.floor(weatherData.list[0].main.feels_like);\n    data.humidity = weatherData.list[0].main.humidity;\n    data.weatherDescription = weatherData.list[0].weather[0].description;// light rain\n    data.weatherIcon = weatherData.list[0].weather[0].icon;\n    data.windSpeed = weatherData.list[0].wind.speed;\n    data.city = weatherData.city.name;\n    data.country = weatherData.city.country;\n    data.sunrise = weatherData.city.sunrise;\n    data.timezone = weatherData.city.timezone;\n    console.log('data fetched: ', data);\n    return data;\n  } catch (error) {\n    console.log('error in weather data');\n  }\n}\n\nconst getDate = (sun, time) => {\n  const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };\n  const date = new Date((sun + time) * 1000);\n\n  const localTime = date.toLocaleDateString('en-US', options);\n  console.log('localTime: ', localTime);\n  return localTime;\n};\n\nasync function fetchData() {\n  //if (!input.value) console.log('yay ',document.querySelector('input'););\n  console.log('inside fetchData');\n  const location = document.querySelector('input').value;\n  const flash = document.getElementById('flash');\n  flash.style.display = 'none';\n  console.log('location: ', location);\n  if (location.length > 3) {\n    try {\n      const data = await fetchWeather(location);\n      const localTime = getDate(data.sunrise, data.timezone);\n      (0,_render_data__WEBPACK_IMPORTED_MODULE_0__.renderData)(data, localTime);\n    } catch (error) {\n      console.log('error in fetchData()');\n    }\n  } else {\n    flash.style.display = '';\n    flash.textContent = ' Error, city needs to be at least 4 chars'\n  }\n\n  // location.value = '';\n}\n\nconst dummy = () => { console.log('dummy function'); };\n\n\n\n//# sourceURL=webpack://my-weather-app/./src/fetch-data.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDomElem\": () => (/* binding */ addDomElem),\n/* harmony export */   \"setAttributes\": () => (/* binding */ setAttributes)\n/* harmony export */ });\nconst addDomElem = (tag, att, name, content) => {\n  const domElem = document.createElement(tag);\n  if (content) domElem.textContent = content;\n  if (att === 'id') {\n    domElem.id = name;\n  } else if (att === 'class') {\n    name.split(' ').forEach(n => {\n      domElem.classList.add(n);\n    });\n  }\n\n  return domElem;\n};\n\n// const addDomCustom = (tag, k) => {\n//   switch (k) {\n//     case 'col':\n//       return addDomElem(tag, 'class', 'col-md-6 col-lg-4' );\n//     break;\n//     case 'row':\n//       return addDomElem(tag, 'class','row');\n//     break;\n//     case 'colb':\n//       return addDomElem(tag, 'class','col');\n//     break;\n//     case 'pl':\n//       return addDomElement('p', 'class', 'text-left my-auto');\n//     break;\n//     case 'pr':\n//       return addDomElement('p', 'class', 'text-right my-auto');\n//     break;\n//   default:\n//       break;\n// }\n\nconst setAttributes = (el, attrs) => {\n  Object.entries(attrs).forEach(([key, value]) => {\n    el.setAttribute(key, value);\n  });\n};\n\n\n\n\n//# sourceURL=webpack://my-weather-app/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-data */ \"./src/fetch-data.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\n\nconst input = document.querySelector('input');\n(0,_helper__WEBPACK_IMPORTED_MODULE_1__.setAttributes)(input, { required: '', autofocus: '' });\n\ndocument.getElementById('fetch').addEventListener('click', _fetch_data__WEBPACK_IMPORTED_MODULE_0__.fetchData);\n\nwindow.addEventListener('keyup', (e) => {\n  console.log(e.key);\n  if (e.key === 'Enter') {\n    console.log('inside main');\n    (0,_fetch_data__WEBPACK_IMPORTED_MODULE_0__.fetchData)();\n  }\n});\n\n//# sourceURL=webpack://my-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/render-data.js":
/*!****************************!*\
  !*** ./src/render-data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderData\": () => (/* binding */ renderData)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nconst renderData = (data, localTime) => {\n  const newDataArea = document.querySelector('.container.mt-5');\n  const mainRow = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'row justify-content-center');\n  const col1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col-md-6 col-lg-4');\n  const col2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col col-lg-4 col-md-6');\n  const row1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'row');\n  const row2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'row');\n  const iconBox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col');\n  const tempBox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col');\n  const emptyBox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col');\n  const data1Box = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col');\n  const icon = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('img', 'class', 'day');\n  const temp = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'h1 display-1');\n  const empty = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p');\n  const feels = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-left my-auto');\n  const humid = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-left my-auto');\n  const wind = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-left my-auto');\n  const city = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-right my-auto h6 display-6');\n  const time = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-right my-auto');\n  const desc = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-right my-auto');\n\n  icon.src = `http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`;\n  temp.textContent = `${data.temp}°C`;\n  feels.textContent = `Feels like: ${data.feelsLike}°C`;\n  humid.textContent = `Humidity: ${data.humidity}%`;\n  wind.textContent = `Wind: ${data.windSpeed} km/h`;\n  city.textContent = `${data.city}, ${data.country}`;\n  time.textContent = localTime;\n  desc.textContent = `${data.weatherDescription}`;\n\n  iconBox.appendChild(icon);\n  tempBox.appendChild(temp);\n  emptyBox.appendChild(empty);\n  row1.append(iconBox, tempBox, emptyBox);\n  data1Box.append(feels, humid, wind);\n  row2.appendChild(data1Box);\n  col1.append(row1, row2);\n  col2.append(city, time, desc);\n  mainRow.append(col1, col2);\n  newDataArea.appendChild(mainRow);\n\n};\n\n\n\n//# sourceURL=webpack://my-weather-app/./src/render-data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;