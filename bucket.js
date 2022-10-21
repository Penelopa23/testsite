let tg = window.Telegram.WebApp; // Достаем обьект

tg.expand(); //растягиеваем страницу на весь экран

tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом

let cost = 0;

//Получить значение из localStorage
bucket = new Map(JSON.parse(localStorage.myMap));

for(let entry of bucket) {
   //Получаем имя и количество выбранных товаров
   if(entry[1] > 0) {
   setBill(entry[0], entry[1]);
   }
}

function setBill(name, amount) {
   let visible = document.getElementById(name + "Show");
   visible.classList.add("selected");
   //Достаём элемент количества товара
   let product = document.getElementById( name + "Amount");
   //Вставляем значение
   product.innerHTML = amount;
   //Достаём цену
   let priceOneProduct = Number(document.getElementById(name + "Price"));
   //Умножаем стоимость одного товара на его количество
   let price = priceOneProduct.innerText * amount;
   cost += price;
   //Вставляем стоимость товара
   priceOneProduct.innerText = "$" + price;
}


tg.MainButton.setText("Pay $" + cost); //Вставляем техт в кнопку
tg.MainButton.show(); //Показываем кнопку

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
                tg.initDataUnsafe.query_id + '&result={"type":"article","id":' + cost + ',"title":"test","message_text":"' + tg.MainButton.text + '"}'
    fetchAsync(url);
 }

 async function fetchAsync (url) {
   fetch(url)
     .then(res => res.json())
     .then(json => console.log(json));
}
 