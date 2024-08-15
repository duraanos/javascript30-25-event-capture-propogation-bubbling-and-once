'use strict';

const divs = document.querySelectorAll('div');

const logText = function (e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling!
};

divs.forEach(div =>
  div.addEventListener('click', logText, {
    capture: true,
    once: false,
  })
);
