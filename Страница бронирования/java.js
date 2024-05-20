const bookBtn = document.getElementById('bookBtn');
const finalPrice = document.getElementById('finalPrice');

bookBtn.addEventListener('click', () => {
  // Получение данных из формы
  const droneId = document.getElementById('droneId').value;
  const droneBrand = document.getElementById('droneBrand').value;
  const droneName = document.getElementById('droneName').value;
  const bookingDateTime = document.getElementById('bookingDateTime').value;
  const returnDateTime = document.getElementById('returnDateTime').value;
  const rentalPoint = document.getElementById('rentalPoint').value;

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const middleName = document.getElementById('middleName').value;
  const phone = document.getElementById('phone').value;
  const passport = document.getElementById('passport').value;
  const creditCard = document.getElementById('creditCard').value;

  // Рассчет финальной стоимости
  const bookingHours = Math.ceil((new Date(returnDateTime) - new Date(bookingDateTime)) / (1000 * 60 * 60));
  let totalPrice = 0;
  
  if (bookingHours <= 1) {
    totalPrice = bookingHours * 1350;
  } else if (bookingHours <= 6) {
    totalPrice = bookingHours * 1333.33; // Чтобы учесть скидку при аренде на 6 часов
  } else {
    totalPrice = bookingHours * 1200;
  }

  finalPrice.textContent = totalPrice + ' руб.';
});
 