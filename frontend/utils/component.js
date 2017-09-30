function component(selector, factory) {
  const elements = document.querySelectorAll(selector);

  for (let i = 0; i < elements.length; i += 1) {
    factory(elements[i]);
  }
}

export default component;
