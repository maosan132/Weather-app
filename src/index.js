import fetchData from './fetch-data';
import { autoFocus } from './helper';
import './style.css';

autoFocus('input');

document.getElementById('fetch').addEventListener('click', fetchData);

window.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') fetchData();
});