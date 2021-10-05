const spanEl = document.querySelector('span');

const getName = function () {
  const savedName = localStorage.getItem('name');
  spanEl.innerHTML = savedName;
};

getName();
