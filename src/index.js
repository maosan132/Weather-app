import { fetchData } from './fetch-data';
import { setAttributes } from './helper';

const input = document.querySelector('input');
setAttributes(input, { required: '', autofocus: '' });

document.getElementById('fetch').addEventListener('click', fetchData);

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  if (e.key === 'Enter') {
    console.log('inside main');
    fetchData();
  }
});