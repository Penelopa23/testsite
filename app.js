let tg = window.Telegram.WebApp; // Достаем обьект

tg.expand(); //растягиеваем страницу на весь экран

tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом

let item = 0; //переменная куда складывается то что выбрали

var map = new Map();

//Достаем кнопки из html страницы
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let plus= document.getElementById("plus");
let minus= document.getElementById("minus");

//Создём кнопки плюс и минус



// $('btn1').on('click', function() {
// 	$(this).remove();
//   $('.more').show();
// })

//добавляем дейтсвия к каждой кнопке
btn1.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
        btn1.remove();
    }else{
        btn1.remove();
        document.getElementById("btn1Count").style.display="block";
        tg.MainButton.setText("VIEW ORDER");
        map.set("Chicken burger", "565");
        tg.MainButton.show();
    }
})

btn2.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        btn2.remove();
        document.getElementById("btn2Count").style.display="block";
        tg.MainButton.setText("VIEW ORDER");
        tg.MainButton.setText("VIEW ORDER");
        map.set("Fish burger", "700");
        tg.MainButton.show();
    }
})

btn3.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        btn3.remove();
        document.getElementById("btn3Count").style.display="block";
        tg.MainButton.setText("VIEW ORDER");
        tg.MainButton.setText("VIEW ORDER");
        map.set("Vegetables burger", "600");
        tg.MainButton.show();
    }
})

btn4.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        btn4.remove();
        document.getElementById("btn4Count").style.display="block";
        tg.MainButton.setText("VIEW ORDER");
        map.set("Beef burger", "488");
        tg.MainButton.show();
    }
})

btn5.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        btn5.remove();
        document.getElementById("btn5Count").style.display="block";
        tg.MainButton.setText("VIEW ORDER");
        map.set("Cheese burger", "520");
        tg.MainButton.show();
    }
})

btn6.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        btn6.remove();
        document.getElementById("btn6Count").style.display="block";
        tg.MainButton.setText("VIEW ORDER");
        map.set("Spicy burger", "800");
        tg.MainButton.show();
    }
})

//Перенаправить на страницу с корзиной
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    // Сохранить значение в sessionStorage
    sessionStorage.setItem('result', map);

    window.location.href='bucket.html';
 });


 async function fetchAsync (url) {
     fetch(url)
       .then(res => res.json())
       .then(json => console.log(json));
 }

//Достаем элемент с информацией о юзере из html
let usercard = document.getElementById("usercard");

//Создаем параграф
let paragraph = document.createElement("p");

//Достаем и вставляем даннык о юзере в карточку юзера
paragraph.innerText = `${tg.initDataUnsafe.user.first_name}`
`${tg.initDataUnsafe.user.last_name}`
`${tg.initDataUnsafe.user.id}`

usercard.appendChild("paragraph");


