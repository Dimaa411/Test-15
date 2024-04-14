const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Встановлюємо шаблонізатор та каталог з шаблонами
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Головна сторінка
app.get('/', (req, res) => {
  res.render('index.ejs.html', { title: 'Головна сторінка' });
});

// Сторінка "Про нас"
app.get('/about', (req, res) => {
  res.render('about.ejs.html', { title: 'Про нас' });
});

// Обробка помилки 404
app.use((req, res, next) => {
  res.status(404).render('C:\Users\dimaa\Desktop\Tests\views' , { title: '404 - Сторінку не знайдено' });
});

// Обробка інших помилок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500.ejs.html', { title: '500 - Помилка сервера' });
});

// Слухаємо вказаний порт
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
