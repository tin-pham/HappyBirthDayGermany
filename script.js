const giftBox = document.querySelector('.gift-box');
const modals = document.querySelector('.modals');

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
