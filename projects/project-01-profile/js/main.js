// === МОДАЛЬНІ ВІКНА ===

function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modalEl) {
  modalEl.classList.remove("active");
  modalEl.setAttribute("aria-hidden", "true");
}

// Відкриття
document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.modal));
});

// Закриття по хрестику
document.querySelectorAll(".close-modal").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.closest(".modal")));
});

// Закриття по кліку поза вікном
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal);
  });
});


// === ФОРМА ===

const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const message = form.elements["message"].value.trim();

  if (!name || !email.includes("@") || !message) return;

  form.reset();
  messageBox.classList.remove("hidden");

  setTimeout(() => {
    messageBox.classList.add("hidden");
  }, 3000);
});
