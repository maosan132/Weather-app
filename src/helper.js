const addDomElem = (tag, att, name, content) => {
  const domElem = document.createElement(tag);
  if (content) domElem.textContent = content;
  if (att === 'id') {
    domElem.id = name;
  } else if (att === 'class') {
    name.split(' ').forEach(n => {
      domElem.classList.add(n);
    });
  }

  return domElem;
};

const addDomCustom = (tag, k) => { col row colb p pl pr
  switch (k) {
    case 'col':
      return addDomElem('div', 'class', 'col-md-6 col-lg-4' );
    break;
    case 'row':
      return addDomElem('div', 'class','row');
    break;
    case 'colb':
      return addDomElem('div', 'class','col');
    break;
    case 'p':
      return addDomElem('p');
    break;
    case 'pl':
      return addDomElement('p', 'class', 'text-left my-auto');
    break;
    case 'pr':
      return addDomElement('p', 'class', 'text-right my-auto');
    break;
  default:
      break;
}


switch (expr) {
  case 'Naranjas':
    console.log('El kilogramo de naranjas cuesta $0.59.');
    break;
  case 'Manzanas':
    console.log('El kilogramo de manzanas cuesta $0.32.');
    break;
  case 'Platanos':
    console.log('El kilogramo de platanos cuesta $0.48.');
    break;
  case 'Cerezas':
    console.log('El kilogramo de cerezas cuesta $3.00.');
    break;
  case 'Mangos':
  case 'Papayas':
    console.log('El kilogramo de mangos y papayas cuesta $2.79.');
    break;
  default:
    console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
}

const setAttributes = (el, attrs) => {
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
};

export { addDomElem, addDomCustom };
