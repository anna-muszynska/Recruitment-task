const sendLink = document.querySelector('#send');
const inputEmail = document.querySelector('#input_email');
const inputName = document.querySelector('#input_name');
const formEl = document.querySelector('#container');

const popUp = function () {
  formEl.classList.remove('hidden');
};

setTimeout(popUp, 2000);

sendLink.addEventListener('click', e => {
  const name = inputName.value;
  const toUpperName = name.toUpperCase();
  localStorage.setItem('name', toUpperName);
  inputEmail.value = '';
  inputName.value = '';
});
