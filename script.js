const giftBox = document.querySelector('.gift-box');
const modals = document.querySelector('.modals');
const body = document.body;

window.addEventListener('load', showAnimation);

function showAnimation() {
  body.classList.remove('js-loading');
}

giftBox.addEventListener('click', showModals);

function showModals() {
  modals.classList.remove('hidden');
  modals.classList.add('show');
}

modals.addEventListener('click', hideModals);

function hideModals() {
  modals.classList.remove('show');
  modals.classList.add('hidden');
}
