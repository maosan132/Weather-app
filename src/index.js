import fetchData from './fetch-data';
import { autoFocus } from './helper';
import './style.css';

autoFocus('input'); // deals w a bug that keeps from validation from html5 required

document.getElementById('fetch').addEventListener('click', fetchData);

window.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') fetchData();
});