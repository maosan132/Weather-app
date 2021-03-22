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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _render_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-data */ \"./src/render-data.js\");\n\n\nasync function fetchWeather(location) {\n  const api = '1627b8ae6ced3746531173abad9b4d06';\n  const unit = 'metric';\n  try {\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${api}`,\n      { mode: 'cors' },\n    );\n    const weatherData = await response.json();\n    const data = {};\n    data.temp = Math.floor(weatherData.list[0].main.temp);\n    data.feelsLike = Math.floor(weatherData.list[0].main.feels_like);\n    data.humidity = weatherData.list[0].main.humidity;\n    data.weatherDescription = weatherData.list[0].weather[0].description;// light rain\n    data.weatherIcon = weatherData.list[0].weather[0].icon;\n    data.code = weatherData.list[0].weather[0].id;\n    data.windSpeed = weatherData.list[0].wind.speed;\n    data.city = weatherData.city.name;\n    data.country = weatherData.city.country;\n    data.sunrise = weatherData.city.sunrise;\n    data.timezone = weatherData.city.timezone;\n    return data;\n  } catch (error) {\n    console.log('error in weather data');\n  }\n}\n\nconst getDate = (sun, time) => {\n  const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };\n  const date = new Date((sun + time) * 1000);\n\n  const localTime = date.toLocaleDateString('en-US', options);\n  return localTime;\n};\n\nasync function fetchData() {\n  let location = document.querySelector('input').value;\n  const flash = document.getElementById('flash');\n  flash.style.display = 'none';\n  if (location.length > 3) {\n    try {\n      const data = await fetchWeather(location);\n      const localTime = getDate(data.sunrise, data.timezone);\n      (0,_render_data__WEBPACK_IMPORTED_MODULE_0__.changeBackground)(data.code);\n      (0,_render_data__WEBPACK_IMPORTED_MODULE_0__.renderData)(data, localTime);\n    } catch (error) {\n      flash.style.display = '';\n      flash.textContent = ' Sorry, No data about that location';\n    }\n  } else {\n    flash.style.display = '';\n    flash.textContent = ' Sorry, city needs to be at least 4 chars';\n  }\n\n  document.querySelector('input').value = '';\n}\n\n\n\n//# sourceURL=webpack://my-weather-app/./src/fetch-data.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDomElem\": () => (/* binding */ addDomElem),\n/* harmony export */   \"setAttributes\": () => (/* binding */ setAttributes),\n/* harmony export */   \"autoFocus\": () => (/* binding */ autoFocus)\n/* harmony export */ });\nconst addDomElem = (tag, att, name, content) => {\n  const domElem = document.createElement(tag);\n  if (content) domElem.textContent = content;\n  if (att === 'id') {\n    domElem.id = name;\n  } else if (att === 'class') {\n    name.split(' ').forEach(n => {\n      domElem.classList.add(n);\n    });\n  }\n\n  return domElem;\n};\n\nconst setAttributes = (el, attrs) => {\n  Object.entries(attrs).forEach(([key, value]) => {\n    el.setAttribute(key, value);\n  });\n};\n\nconst autoFocus = (i) => {\n  const input = document.querySelector(i);\n  setAttributes(input, { required: '', autofocus: '' });\n};\n\n\n\n\n//# sourceURL=webpack://my-weather-app/./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-data */ \"./src/fetch-data.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\n\n(0,_helper__WEBPACK_IMPORTED_MODULE_1__.autoFocus)('input');\n\ndocument.getElementById('fetch').addEventListener('click', _fetch_data__WEBPACK_IMPORTED_MODULE_0__.fetchData);\n\nwindow.addEventListener('keyup', (e) => {\n  console.log(e.key);\n  if (e.key === 'Enter') {\n    console.log('inside main');\n    (0,_fetch_data__WEBPACK_IMPORTED_MODULE_0__.fetchData)();\n  }\n});\n\n//# sourceURL=webpack://my-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/render-data.js":
/*!****************************!*\
  !*** ./src/render-data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderData\": () => (/* binding */ renderData),\n/* harmony export */   \"changeBackground\": () => (/* binding */ changeBackground)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\n\nconst renderData = (data, localTime) => {\n  const newDataArea = document.querySelector('.container.mt-5');\n  newDataArea.innerHTML = '';\n  const mainRow = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'row justify-content-center rounded p-1 pb-4');\n  mainRow.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';\n  const col1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col-md-6 col-lg-4');\n  const col2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col col-lg-4 col-md-6');\n  const row1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'row');\n  const row2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'row');\n  const iconBox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col');\n  const tempBox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col');\n  const emptyBox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col');\n  const data1Box = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('div', 'class', 'col');\n  const icon = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('img', 'class', 'float-left');\n  const temp = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'h1 display-1');\n  const empty = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p');\n  const feels = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-left my-auto h5');\n  const humid = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-left my-auto h5');\n  const wind = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-left my-auto h5');\n  const city = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-right my-auto h4 pt-3');\n  const time = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-right my-auto h5');\n  const desc = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addDomElem)('p', 'class', 'text-right my-auto h5');\n\n  icon.src = `http://openweathermap.org/img/wn/${data.weatherIcon}@2x.png`;\n  temp.textContent = `${data.temp}°C`;\n  feels.textContent = `Feels like: ${data.feelsLike}°C`;\n  humid.textContent = `Humidity: ${data.humidity}%`;\n  wind.textContent = `Wind: ${data.windSpeed} km/h`;\n  city.textContent = `${data.city}, ${data.country}`;\n  time.textContent = localTime;\n  desc.textContent = `${data.weatherDescription} (code ${data.code})`;\n\n  iconBox.appendChild(icon);\n  tempBox.appendChild(temp);\n  emptyBox.appendChild(empty);\n  row1.append(iconBox, tempBox, emptyBox);\n  data1Box.append(feels, humid, wind);\n  row2.appendChild(data1Box);\n  col1.append(row1, row2);\n  col2.append(city, time, desc);\n  mainRow.append(col1, col2);\n  newDataArea.appendChild(mainRow);\n\n  (0,_helper__WEBPACK_IMPORTED_MODULE_0__.autoFocus)('input');\n};\n\n\nconst changeBackground = (code) => {\n  const bg = document.querySelector('section');\n  const wGroup = code.toString()[0];\n\nswitch (wGroup) {\n    case '2':\n      bg.style.background = 'url(\"./200.jpg\") center center / cover no-repeat';\n      break;\n    case '3':\n      bg.style.background = 'url(\"./300.jpg\") center center / cover no-repeat';\n      break;\n    case '5':\n      if (code === 500) {\n        bg.style.background = 'url(\"./500.jpg\") center center / cover no-repeat';\n      } else if (code === 501) {\n        bg.style.background = 'url(\"./501.jpg\") center center / cover no-repeat';\n      } else if (code === 502) {\n        bg.style.background = 'url(\"./502.jpg\") center center / cover no-repeat';\n      } else {\n        bg.style.background = 'url(\"./503.jpg\") center center / cover no-repeat';\n      }\n      break;\n    case '6':\n      bg.style.background = 'url(\"./600.jpg\") center center / cover no-repeat';\n      break;\n    case '7':\n      bg.style.background = 'url(\"./701.jpg\") center center / cover no-repeat';\n      break;\n    case '8':\n      if (code === 800) {\n        bg.style.background = 'url(\"./800.jpg\") center center / cover no-repeat';\n      } else if (code === 801) {\n        bg.style.background = 'url(\"./801.jpg\") center center / cover no-repeat';\n      } else if (code === 802) {\n        bg.style.background = 'url(\"./802.jpg\") center center / cover no-repeat';\n      } else if (code === 803) {\n        bg.style.background = 'url(\"./803.jpg\") center center / cover no-repeat';\n      } else {\n        bg.style.background = 'url(\"./804.jpg\") center center / cover no-repeat';\n      }\n      break;\n    default:\n      break;\n}\n};\n\n\n//# sourceURL=webpack://my-weather-app/./src/render-data.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;