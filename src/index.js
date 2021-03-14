import { fetchData } from './fetch-data';

document.getElementById('submit').addEventListener('click', fetchData);
window.addEventListener('keyup', (e) => {
  if (e.key === 13) {
    fetchData();
  }
});