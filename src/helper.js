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

const setAttributes = (el, attrs) => {
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });
};

const autoFocus = (i) => {
  const input = document.querySelector(i);
  setAttributes(input, { required: '', autofocus: '' });
};

export { addDomElem, setAttributes, autoFocus };
