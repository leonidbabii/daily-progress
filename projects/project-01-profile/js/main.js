// Модальне вікно
const modal = document.getElementById('modal');
const openBtn = document.querySelector('.details-btn');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) modal.style.display = 'none';
});

// Валідація форми
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Будь ласка, заповніть всі поля.');
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert('Некоректний email.');
    return;
  }

  alert('Повідомлення надіслано!');
  form.reset();
});



// Відкриття модалок
document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

// Закриття по хрестику
document.querySelectorAll('.close').forEach(close => {
  close.addEventListener('click', () => {
    close.closest('.modal').style.display = 'none';
  });
});

// Закриття при кліку поза вікном
window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});






