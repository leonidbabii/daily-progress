const apiKey = '9b88a88729d63c4b30e4d1d75cd4e653'; // Замінити на свій реальний ключ
const btn = document.querySelector('.button__submit');
const input = document.getElementById('cityInput');
const resultDiv = document.getElementById('result');

btn.addEventListener('click', (e) => {
  e.preventDefault(); // Щоб форма не перезавантажувала сторінку

  const city = input.value.trim();

  if (!city) {
    resultDiv.textContent = 'Введи назву міста';
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&lang=ua&appid=${apiKey}`;

  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Місто не знайдено');
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      resultDiv.textContent = `Температура в ${city}: ${temp.toFixed(1)}°C`;
    })
    .catch(err => {
      resultDiv.textContent = `Помилка: ${err.message}`;
    });
});
