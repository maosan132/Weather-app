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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dummy\": () => (/* binding */ dummy),\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _render_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-data */ \"./src/render-data.js\");\n\n\nasync function fetchWeather(location) {\n  const api = '1627b8ae6ced3746531173abad9b4d06';\n  const unit = 'metric';\n  try {\n    console.log('inside fetchWeather');\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&APPID=${api}`,\n      { mode: 'cors' },\n    );\n    const weatherData = await response.json();\n    console.log('json: ', weatherData);\n    const data = {};\n    data.temp = Math.floor(weatherData.list[0].main.temp);\n    data.tempFeelsLike = Math.floor(weatherData.list[0].main.feels_like);\n    data.humidity = weatherData.list[0].main.humidity;\n    data.weatherDescription = weatherData.list[0].weather[0].description;// light rain\n    data.weatherIcon = weatherData.list[0].weather[0].icon;\n    data.windSpeed = weatherData.list[0].wind.speed;\n    data.name = weatherData.city.name;\n    data.country = weatherData.city.country;\n    data.sunrise = weatherData.city.sunrise;\n    data.timezone = weatherData.city.timezone;\n    console.log('data fetched: ', data);\n    return data;\n  } catch (error) {\n    console.log('error in weather data');\n  }\n}\n\nconst getDate = (sun, time) => {\n  const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };\n  const date = new Date((sun + time) * 1000);\n\n  const localTime = date.toLocaleDateString('en-US', options);\n  console.log(localTime);\n  return localTime;\n};\n\nasync function fetchData() {\n  console.log('inside fetchData');\n  const location = document.querySelector('input').value;\n  console.log('location: ', location);\n  try {\n    const data = await fetchWeather(location);\n    const localTime = getDate(data.sunrise, data.timezone);\n    (0,_render_data__WEBPACK_IMPORTED_MODULE_0__.renderData)(data, localTime);\n  } catch (error) {\n    console.log('error in fetchData()');\n  }\n  // location.value = '';\n}\n\nconst dummy = () => { console.log('dummy function'); };\n\n\n\n//# sourceURL=webpack://my-weather-app/./src/fetch-data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-data */ \"./src/fetch-data.js\");\n\n\ndocument.getElementById('fetch').addEventListener('click', _fetch_data__WEBPACK_IMPORTED_MODULE_0__.fetchData);\nwindow.addEventListener('keyup', (e) => {\n  console.log(e.key);\n  if (e.key === 'Enter') {\n    console.log('inside main');\n    (0,_fetch_data__WEBPACK_IMPORTED_MODULE_0__.fetchData)();\n  }\n});\n\n//# sourceURL=webpack://my-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/render-data.js":
/*!****************************!*\
  !*** ./src/render-data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderData\": () => (/* binding */ renderData)\n/* harmony export */ });\nconst renderData = () => {\n\n};\n\n\n\n//# sourceURL=webpack://my-weather-app/./src/render-data.js?");

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