function redirectToBankCards() {
  window.location.href = 'cards.html'; // Замените 'bankcards.html' на URL вашей страницы с банковскими картами
}
function logout() {
  // Логика выхода из личного кабинета, например, очистка данных пользователя и перенаправление на страницу входа
  localStorage.removeItem('userData'); // Удаление данных о пользователе из localStorage
  window.location.href = 'register.html'; // Замените 'login.html' на URL вашей страницы входа
}