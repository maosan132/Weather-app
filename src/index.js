import fetchData from './fetch-data';
import { autoFocus } from './helper';

autoFocus('input');

document.getElementById('fetch').addEventListener('click', fetchData);

window.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') fetchData();
});