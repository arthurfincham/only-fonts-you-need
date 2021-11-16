const showText = require("./src/showText")

const input = document.querySelector('#text-input');

const button = document.querySelector('#trigger-btn');

button.addEventListener('click', () => {
  console.log('click');
  let html = input.value;
  return showText(html);
});
