let tg = window.Telegram.WebApp; // Достаем обьект

tg.expand(); //растягиеваем страницу на весь экран

tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом

let item = ""; //переменная куда складывается то что выбрали

//Достаем кнопки из html страницы
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

//добавляем дейтсвия к каждой кнопке
btn1.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        tg.MainButton.setText("Вы выбрали товар 1!");
        item = "1";
        tg.MainButton.show();
    }
})

btn2.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        tg.MainButton.setText("Вы выбрали товар 2!");
        item = "2";
        tg.MainButton.show();
    }
})

btn3.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        tg.MainButton.setText("Вы выбрали товар 3!");
        item = "3";
        tg.MainButton.show();
    }
})

btn4.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        tg.MainButton.setText("Вы выбрали товар 4!");
        item = "4";
        tg.MainButton.show();
    }
})

btn5.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        tg.MainButton.setText("Вы выбрали товар 5!");
        item = "5";
        tg.MainButton.show();
    }
})

btn6.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        tg.MainButton.setText("Вы выбрали товар 6!");
        item = "6";
        tg.MainButton.show();
    }
})

//Отправляем данные о выбранном товаре
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData("some string that we need to send");
    console.log(tg.initDataUnsafe.query_id)
    let query_id = tg.initDataUnsafe.query_id
    answerWebAppQuery(tg.initDataUnsafe.query_id);
 });
 
 async function answerWebAppQuery(query_id) {
    console.log(query_id)
    console.log(tg.initDataUnsafe.query_id)
    let url = 'https://api.telegram.org/bot5558689984:AAHktTbnkTXsBAdPX59CuBeqYC1gkmUC2pE/answerWebAppQuery?web_app_query_id=' + 
                tg.initDataUnsafe.query_id + '&result={"type":"article","id":' + item + ',"title":"test","message_text":"It\'s works"}'
    fetchAsync(url);
 }
 
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


