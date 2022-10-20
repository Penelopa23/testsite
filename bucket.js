let tg = window.Telegram.WebApp; // Достаем обьект

tg.expand(); //растягиеваем страницу на весь экран

tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом

let cost = 0;
let message = "Order summary: \n";
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
   let priceOneProduct = document.getElementById(name + "Price");
   let costOneProduct = Number(priceOneProduct.innerText);
   //Умножаем стоимость одного товара на его количество
   let price = costOneProduct * amount;
   cost += price;

   message += name + "x" + amount + " - " + price + "\n"; 
   //Вставляем стоимость товара
   priceOneProduct.innerText = "$" + price;
}

//Форматируем общую стоимость чтобы не было кучи нулей после запятой
mainCost = new Intl.NumberFormat("en", {style: "currency", currency: "USD", maximumFractionDigits: 2}).format(cost);
//Вставлем общую стоимость в маапу чтобы потом передать в бота
bucket.set("orderPrice", mainCost);
tg.MainButton.setText("Pay " + mainCost); //Вставляем техт в кнопку
tg.MainButton.show(); //Показываем кнопку

//Отправляем данные о выбранном товаре
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    let query_id = tg.initDataUnsafe.query_id
    answerWebAppQuery(tg.initDataUnsafe.query_id);
 });
 
 async function answerWebAppQuery(query_id) {
   //Переводим мапу в строку для вставки в запрос и экранируем кавычки в сообщении
   //let message = JSON.stringify(Array.from(bucket.entries())).replace(/\"/g, "\\\"");
   console.log(message);
   //Создаём запрос
    let url = 'https://api.telegram.org/bot5558689984:AAHktTbnkTXsBAdPX59CuBeqYC1gkmUC2pE/answerWebAppQuery?web_app_query_id=' + 
                tg.initDataUnsafe.query_id + '&result={"type":"article","id":' + cost + ',"title":"' + message + '","message_text":"You order is accepted"}'
    console.log(url);
    //Отправляем данные в бота
    fetchAsync(url);
 }

 async function fetchAsync (url) {
   fetch(url)
     .then(res => res.json())
     .then(json => console.log(json));
}
 