
let tg = window.Telegram.WebApp; // Достаем обьект
tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом
tg.MainButton.setText("VIEW ORDER");

let burgerPlus = document.getElementById("plus");
let burgerMinus = document.getElementById("minus");
let burgerCount = document.getElementById("1");
let burgerButtons = document.getElementById("buttons");
let burgerAmount = 0;
burgerPlus.addEventListener("click", function(){
    burgerCount.style = "animation-name: badge-show;";
    ++burgerAmount;
    burgerCount.innerText = burgerAmount;
    burgerButtons.classList.add("selected");
    tg.MainButton.show();

})
burgerMinus.addEventListener("click", function(){
    if(burgerAmount < 2) {
        burgerButtons.classList.remove("selected");
        burgerCount.style = "";
        tg.MainButton.hide();
    }else {
        --burgerAmount;
        burgerCount.innerText = burgerAmount;
    }
})




