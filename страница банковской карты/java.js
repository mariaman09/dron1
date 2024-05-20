const addCardBtn = document.getElementById("addCardBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];
const addCardModalBtn = document.getElementById("addCardModalBtn");
const cardList = document.getElementById("cardList");
const cardNumberInput = document.getElementById("cardNumber");
const cardTypeField = document.getElementById("cardType");
const deleteBtn = document.getElementById("deleteBtn");

addCardBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

addCardModalBtn.addEventListener("click", () => {
    // Валидация и добавление новой карты на страницу
    const cardNumber = document.getElementById("cardNumber").value;
    const cardHolder = document.getElementById("cardHolder").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    // Определение типа карты по первым цифрам номера
    let cardType = "";
    if (/^1/.test(cardNumber)) {
        cardType = "Visa";
    } else if (/^2/.test(cardNumber)) {
        cardType = "MasterCard";
    } else if (/^3/.test(cardNumber)) {
        cardType = "Мир";
    } else {
        cardType = "Неизвестный тип";
    }

    // Создание элемента для новой карты и добавление его на страницу
    const newCard = document.createElement("div");
    newCard.textContent = `**** **** **** ${cardNumber.slice(-4)} (${cardType}) - ${cardHolder} - ${expiryDate} - CVV: ${cvv}`;
    cardList.appendChild(newCard);

    modal.style.display = "none";
});

// Автоматическое определение типа карты при вводе номера карты
cardNumberInput.addEventListener("input", () => {
    let cardNumber = cardNumberInput.value;
    
    // Определение типа карты по первым цифрам
    if (/^1/.test(cardNumber)) {
        cardTypeField.textContent = "Visa";
    } else if (/^2/.test(cardNumber)) {
        cardTypeField.textContent = "MasterCard";
    } else if (/^3/.test(cardNumber)) {
        cardTypeField.textContent = "Мир";
    } else {
        cardTypeField.textContent = "Неизвестный тип";
    }
    
});



deleteBtn.addEventListener("click", function () {
    // Получаем родительский элемент (div) для текущей карты
    const clickedCard = event.target.parentElement;

    // Удаление элемента карты из списка и, если вам нужно, из DOM
    clickedCard.remove();

    // Если вам нужен лог или событие удаления, вы можете добавить что-то вроде:
    console.log("Card with ID", clickedCard.id, "deleted");
});


