
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
    burgerAmount++;
    plus(burgerButtons, burgerCount, burgerAmount, "burgers");
    checkForMainButton();
})

burgerMinus.addEventListener("click", function(){
    burgerAmount--;
    minus(burgerButtons, burgerCount, burgerAmount, "burgers");
    checkForMainButton();
})

//Fries
let friesPlus = document.getElementById("friesPlus");
let friesMinus = document.getElementById("friesMinus");
let friesCount = document.getElementById("2");
let friesButtons = document.getElementById("friesButtons");
let friesAmount = 0;

friesPlus.addEventListener("click", function(){
    friesAmount++;
    plus(friesButtons, friesCount, friesAmount, "fries");
    checkForMainButton();
})

friesMinus.addEventListener("click", function(){
    friesAmount--;
    minus(friesButtons, friesCount, friesAmount, "fries");
    checkForMainButton();
})

//Hotdogs
let hotdogPlus = document.getElementById("hotdogPlus");
let hotdogMinus = document.getElementById("hotdogMinus");
let hotdogCount = document.getElementById("3");
let hotdogButtons = document.getElementById("hotdogButtons");
let hotdogAmount = 0;

hotdogPlus.addEventListener("click", function(){
    hotdogAmount++;
    plus(hotdogButtons, hotdogCount, hotdogAmount, "hotdogs");
    checkForMainButton();
})

hotdogMinus.addEventListener("click", function(){
    hotdogAmount--;
    minus(hotdogButtons, hotdogCount, hotdogAmount, "hotdogs");
    checkForMainButton();
})

//Takos
let takoPlus = document.getElementById("takoPlus");
let takoMinus = document.getElementById("takoMinus");
let takoCount = document.getElementById("4");
let takoButtons = document.getElementById("takoButtons");
let takoAmount = 0;

takoPlus.addEventListener("click", function(){
    takoAmount++;
    plus(takoButtons, takoCount, takoAmount, "tako");
    checkForMainButton();
})

takoMinus.addEventListener("click", function(){
    takoAmount--;
    minus(takoButtons, takoCount, takoAmount, "takos");
    checkForMainButton();
})

//Pizzas
let pizzaPlus = document.getElementById("pizzaPlus");
let pizzaMinus = document.getElementById("pizzaMinus");
let pizzaCount = document.getElementById("5");
let pizzaButtons = document.getElementById("pizzaButtons");
let pizzaAmount = 0;

pizzaPlus.addEventListener("click", function(){
    pizzaAmount++;
    plus(pizzaButtons, pizzaCount, pizzaAmount, "pizzas");
    checkForMainButton();
})

pizzaMinus.addEventListener("click", function(){
    pizzaAmount--;
    minus(pizzaButtons, pizzaCount, pizzaAmount, "pizzas");
    checkForMainButton();
})

//Donats
let donutPlus = document.getElementById("donatPlus");
let donutMinus = document.getElementById("donutMinus");
let donutCount = document.getElementById("6");
let donutButtons = document.getElementById("donutButtons");
let donutAmount = 0;

donutPlus.addEventListener("click", function(){
    donutAmount++;
    plus(donutButtons, donutCount, donutAmount, "donuts");
    checkForMainButton();
})

donutMinus.addEventListener("click", function(){
    donutAmount--;
    minus(donutButtons, donutCount, donutAmount, "donuts");
    checkForMainButton();
})

//Popcorn
let popcornPlus = document.getElementById("popcornPlus");
let popcornMinus = document.getElementById("popcornMinus");
let popcornCount = document.getElementById("7");
let popcornButtons = document.getElementById("popcornButtons");
let popcornAmount = 0;

popcornPlus.addEventListener("click", function(){
    popcornAmount++;
    plus(popcornButtons, popcornCount, popcornAmount, "popcorn");
    checkForMainButton();
})

popcornMinus.addEventListener("click", function(){
    popcornAmount--;
    minus(popcornButtons, popcornCount, popcornAmount, "popcorn");
    checkForMainButton();
})

//Coke
let cokePlus = document.getElementById("cokePlus");
let cokeMinus = document.getElementById("cokeMinus");
let cokeCount = document.getElementById("8");
let cokenButtons = document.getElementById("cokeButtons");
let cokeAmount = 0;

cokePlus.addEventListener("click", function(){
    cokeAmount++;
    plus(cokeButtons, cokeCount, cokeAmount, "coke");
    checkForMainButton();
})

cokeMinus.addEventListener("click", function(){
    cokeAmount--;
    minus(cokeButtons, cokeCount, cokeAmount, "coke");
    checkForMainButton();
})

//Cake
let cakePlus = document.getElementById("cakePlus");
let cakeMinus = document.getElementById("cakeMinus");
let cakeCount = document.getElementById("9");
let cakenButtons = document.getElementById("cakeButtons");
let cakeAmount = 0;

cakePlus.addEventListener("click", function(){
    cakeAmount++;
    plus(cakeButtons, cakeCount, cakeAmount, "cake");
    checkForMainButton();
})

cakeMinus.addEventListener("click", function(){
    cakeAmount--;
    minus(cakeButtons, cakeCount, cakeAmount, "cake");
    checkForMainButton();
})

//Icecream
let icecreamPlus = document.getElementById("icecreamPlus");
let icecreamMinus = document.getElementById("icecreamMinus");
let icecreamCount = document.getElementById("10");
let icecreamButtons = document.getElementById("icecreamButtons");
let icecreamAmount = 0;

icecreamPlus.addEventListener("click", function(){
    icecreamAmount++;
    plus(icecreamButtons, icecreamCount, icecreamAmount, "icecream");
    checkForMainButton();
})

icecreamMinus.addEventListener("click", function(){
    icecreamAmount--;
    minus(icecreamButtons, icecreamCount, icecreamAmount, "icecream");
    checkForMainButton();
})

//Cookie
let cookiePlus = document.getElementById("cookiePlus");
let cookieMinus = document.getElementById("cookieMinus");
let cookieCount = document.getElementById("11");
let cookieButtons = document.getElementById("cookieButtons");
let cookieAmount = 0;

cookiePlus.addEventListener("click", function(){
    cookieAmount++;
    plus(cookieButtons, cookieCount, cookieAmount, "cookie");
    checkForMainButton();
})

cookieMinus.addEventListener("click", function(){
    cookieAmount--;
    minus(cookieButtons, cookieCount, cookieAmount, "cookie");
    checkForMainButton();
})

//Flan
let flanPlus = document.getElementById("flanPlus");
let flanMinus = document.getElementById("flanMinus");
let flanCount = document.getElementById("12");
let flanButtons = document.getElementById("flanButtons");
let flanAmount = 0;

flanPlus.addEventListener("click", function(){
    flanAmount++;
    plus(flanButtons, flanCount, flanAmount, "flan");
    checkForMainButton();
})

flanMinus.addEventListener("click", function(){
    flanAmount--;
    minus(flanButtons, flanCount, flanAmount, "flan");
    checkForMainButton();
})

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
    console.log(count);
    if (count > 0) {
        tg.MainButton.show();
    } else {
        tg.MainButton.hide();
    }
}

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    sessionStorage.add(bucket);
    document.location.href = "bucket.html";
 });




