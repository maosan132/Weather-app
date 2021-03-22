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

// const addDomCustom = (tag, k) => {
//   switch (k) {
//     case 'col':
//       return addDomElem(tag, 'class', 'col-md-6 col-lg-4' );
//     break;
//     case 'row':
//       return addDomElem(tag, 'class','row');
//     break;
//     case 'colb':
//       return addDomElem(tag, 'class','col');
//     break;
//     case 'pl':
//       return addDomElement('p', 'class', 'text-left my-auto');
//     break;
//     case 'pr':
//       return addDomElement('p', 'class', 'text-right my-auto');
//     break;
//   default:
//       break;
// }

const setAttributes = (el, attrs) => {
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
};

export { addDomElem };
