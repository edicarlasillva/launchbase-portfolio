const modalOverlay = document.querySelector('.overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', () => {
    const id = card.getAttribute('id');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector(
      'iframe'
    ).src = `https://youtube.com/embed/${id}`;
  });
}

document.querySelector('.close').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = '';
});
