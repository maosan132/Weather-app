import { fetchData } from './fetch-data';

submit = document.getElementById('submit');
submit.addEventListener('click', fetchData());

window.addEventListener('keyup', (e) => {
  if (e.key === 13) fetchData();
});