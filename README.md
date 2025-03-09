# 📌 JavaScript Testing with Vitest

Цей проєкт демонструє, як тестувати JavaScript-код за допомогою Vitest. Він містить модульні тести для математичних операцій та роботи з API.

---

## 📥 Встановлення

1. Клонуйте репозиторій або скопіюйте файли проєкту:

   ```sh
   git clone https://github.com/yourusername/my-js-project.git
   cd my-js-project
   ```

2. Встановіть необхідні залежності:
   ```sh
   npm install
   ```

---

## ▶️ Запуск застосунку

Запустіть Vite-сервер:

```sh
npm run dev
```

Перейдіть у браузер за вказаною адресою (`http://localhost:5173`).

---

## ✅ Запуск тестів

Для запуску всіх тестів виконайте:

```sh
npm test
```

Або, якщо у вас є специфічний тестовий скрипт:

```sh
npm run test:vitest
```

---

## 🛠 Використані технології

- **[Vitest](https://vitest.dev/)** – тестовий фреймворк для JavaScript.
- **[Vite](https://vitejs.dev/)** – швидкий збірник для сучасних веб-додатків.
- **Vanilla JavaScript** – чистий JS без використання фреймворків.

---

## 📂 Структура проєкту

```
my-js-project/
│── index.html          # Головна сторінка
│── package.json        # Файл конфігурації проєкту
│── vite.config.js      # Налаштування Vite
│── src/
│   ├── main.js         # Основний JS-файл
│   ├── math.js         # Функції для тестування (sum, divide)
│   ├── api.js          # Асинхронні функції (fetchData, getUser)
│── tests/              # Папка з тестами
│   ├── math.test.js    # Тести для math.js
│   ├── api.test.js     # Тести для api.js
│── README.md           # Опис проєкту
```
