export function createMarkup(markupname, parent, text = "", attributes = {}) {
    const markup = document.createElement(markupname);
    markup.textContent = text;
    parent.appendChild(markup);
    for (key in attributes) {
      markup.setAttribute(key, attributes[key]);
    }
    return markup;
  }