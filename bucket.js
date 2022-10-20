let tg = window.Telegram.WebApp; // Достаем обьект

tg.expand(); //растягиеваем страницу на весь экран

tg.MainButton.setText("Pay"); //Вставляем техт в кнопку
tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом
tg.MainButton.show();

let item = ""; //переменная куда складывается то что выбрали

var bucket = new Map();
bucket.set("fries", 5);

//Записываем мапу в локальное хранилище
localStorage.myMap = JSON.stringify(Array.from(bucket.entries())); 



//Получить значение из localStorage
bucketS = new Map(JSON.parse(localStorage.myMap));

for(let entry of bucketS) {
   console.log(entry[0]);
   setBill(entry[0], entry[1])
}




function setBill(name, amount) {
   //Получаем значение количества выбранного товара
   // let amount = bucketS.get(name);
   //Достаём элемент количества товара
   let product = document.getElementById( name + "Amount");
   //Вставляем значение
   product.innerHTML = amount;
   //Достаём цену
   console.log(name + "Price");
   let priceOneProduct = document.getElementById(name + "Price");
   //Умножаем стоимость одного товара на его количество
   let price = priceOneProduct.innerText * amount;
   //Вставляем стоимость товара
   priceOneProduct.innerText = "$" + price;
}
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
                tg.initDataUnsafe.query_id + '&result={"type":"article","id":' + item + ',"title":"test","message_text":"' + tg.MainButton.text + '"}'
    fetchAsync(url);
 }
 