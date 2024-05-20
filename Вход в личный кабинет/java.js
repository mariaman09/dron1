
function validateForm(event) {
    event.preventDefault();
  
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let middleName = document.getElementById('middleName');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let pasInput = document.getElementById('pas');

    let firstNameError = document.getElementById('firstNameError');
    let lastNameError = document.getElementById('lastNameError');
    let middleNameError = document.getElementById('middleNameError');
    let phoneError = document.getElementById('phoneError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');
    let pasError = document.getElementById('pasError');


    if (!/^[А-Яа-яЁё\s]+$/.test(firstName.value)) {
      firstName.style.borderColor = "red";
      firstNameError.textContent = "Поле должно содержать только кириллицу";
      event.preventDefault();
    } else {
      firstName.style.borderColor = "";
      firstNameError.textContent = "";
    }
  
    if (!/^[А-Яа-яЁё\s]+$/.test(lastName.value)) {
      lastName.style.borderColor = "red";
      lastNameError.textContent = "Поле должно содержать только кириллицу";
      event.preventDefault();
    } else {
      lastName.style.borderColor = "";
      lastNameError.textContent = "";
    }
  
    if (!/^[А-Яа-яЁё\s]+$/.test(middleName.value) && middleName.value !== "") {
      middleName.style.borderColor = "red";
      middleNameError.textContent = "Поле должно содержать только кириллицу";
      event.preventDefault();
    } else {
      middleName.style.borderColor = "";
      middleNameError.textContent = "";
    }
  
    if (!email.checkValidity()) {
      email.style.borderColor = "red";
      emailError.textContent = "Введите корректный email";
      event.preventDefault();
    } else {
      email.style.borderColor = "";
      emailError.textContent = "";
    }
  
    if (!/^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(phone.value)) {
      phone.style.borderColor = "red";
      phoneError.textContent = "Введите корректный номер телефона";
      event.preventDefault();
    } else {
      phone.style.borderColor = "";
      phoneError.textContent = "";
    }
  
    if (password.value.length < 8) {
      password.style.borderColor = "red";
      passwordError.textContent = "Введите корректный пароль";
      event.preventDefault();
    } else {
      password.style.borderColor = "";
      passwordError.textContent = "";
    }
  
    if (confirmPassword.value !== password.value) {
      confirmPassword.style.borderColor = "red";
      confirmPasswordError.textContent = "Пароли не совпадают";
      event.preventDefault();
    } else {
      confirmPassword.style.borderColor = "";
      confirmPasswordError.textContent = "";
    }
     pasInput.addEventListener('input', function() {
    let pasValue = pasInput.value;
    
    // Проверка на правильность ввода паспортных данных
    if (!/^\d{4}\s\d{6}$/.test(pasValue)) {
        pasError.textContent = 'Введите паспортные данные в формате "XXXX XXXXXX"';
    } else {
        pasError.textContent = '';
    }
});
  }
 