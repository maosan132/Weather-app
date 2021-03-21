import { fetchData } from './fetch-data';

document.getElementById('fetch').addEventListener('click', fetchData);
window.addEventListener('keyup', (e) => {
  console.log(e.key);
  if (e.key === 'Enter') {
    console.log('inside main');
    fetchData();
  }
});