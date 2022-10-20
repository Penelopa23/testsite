
let tg = window.Telegram.WebApp; // Достаем обьект
tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом
tg.MainButton.setText("VIEW ORDER");

//Корзина
var bucket = new Map();

//Burgers
let burgerPlus = document.getElementById("burgerPlus");
let burgerMinus = document.getElementById("burgerMinus");
let burgerCount = document.getElementById("1");
let burgerButtons = document.getElementById("burgerButtons");
let burgerAmount = 0;

burgerPlus.addEventListener("click", function(){
    ++burgerAmount;
    plus(burgerButtons, burgerCount, burgerAmount);
    checkForMainButton();
})

burgerMinus.addEventListener("click", function(){
    --burgerAmount
    minus(burgerButtons, burgerCount, burgerAmount);
    checkForMainButton();
})

//Fries
let friesPlus = document.getElementById("friesPlus");
let friesMinus = document.getElementById("friesMinus");
let friesCount = document.getElementById("2");
let friesButtons = document.getElementById("friesButtons");
let friesAmount = 0;

friesPlus.addEventListener("click", function(){
    ++friesAmount;
    plus(friesButtons, friesCount, friesAmount);
    checkForMainButton();
})

friesMinus.addEventListener("click", function(){
    --friesAmount
    minus(friesButtons, friesCount, friesAmount);
    checkForMainButton();
})

// tg.MainButton.addEventListener("click", function(){

// })


function plus(button, count, amount, name) {
    if(amount > 0) {
        count.style = "animation-name: badge-show;";
        button.classList.add("selected");
        tg.MainButton.show();
    }
    bucket.set(name, amount);
    count.innerText = amount;

}

function minus(button, count, amount, name) {
    if(amount < 2) {
        button.classList.remove("selected");
        count.style = "";
        bucket.set(name, 0);
        tg.MainButton.hide();
    }else{
        bucket.set(name, amount);
        count.innerText = amount;
    }
}

function checkForMainButton() {
    let count = 0;
    for(let amount of bucket.values()) {
        count += amount;
    }
    if (count > 0) {
        tg.MainButton.show();
    } else {
        tg.MainButton.hide();
    }
}




