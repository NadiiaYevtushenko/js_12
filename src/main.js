import { sum, divide } from "./math.js";
import { fetchData, getUser } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Вик. math.js
  document.getElementById("sumResult").textContent = sum(4, 5);

  try {
    document.getElementById("divideResult").textContent = divide(10, 2);
  } catch (error) {
    document.getElementById("divideResult").textContent = error.message;
  }

  // Вик. fetchData() 
  const data = await fetchData();
  console.log("Отримані дані:", data);

  // Отримання користувача по кнопці
  document.getElementById("fetchUser").addEventListener("click", async () => {
    try {
      const user = await getUser(1);
      document.getElementById("userData").textContent = `Ім'я: ${user.name}, Email: ${user.email}`;
    } catch (error) {
      document.getElementById("userData").textContent = "Помилка отримання користувача";
    }
  });
});

