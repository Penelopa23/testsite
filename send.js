let tg = window.Telegram.WebApp; // Достаем обьект
let message = "Order summary: \\n";
tg.expand(); //растягиеваем страницу на весь экран

tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом

tg.MainButton.isVisible // видна ли кнопка (по умолчанию false) 
tg.MainButton.setText("SEND") //  метод для задания текста
//tg.MainButton.onClick(callback) // метод при нажатии на кнопку
tg.MainButton.show() // показать кнопку 
// tg.MainButton.hide() // скрыть кнопку
// tg.MainButton.disable() // сделать неактивной 

tg.MainButton.show(); //Показываем кнопку
if(tg.initDataUnsafe.user.id == 179755741) {
    tg.MainButton.enable() // сделать активной 
}else {
    tg.MainButton.disable()
}
console.log(tg.initDataUnsafe.user.id) // уникальный идентификатор пользователя
console.log(tg.initDataUnsafe.user.isBot) // бот ли пользователь (true/false)
console.log(tg.initDataUnsafe.user.first_name) // имя пользователя
console.log(tg.initDataUnsafe.user.last_name) // "фамилия" пользователя
console.log(tg.initDataUnsafe.user.username) // username пользователя
console.log(tg.initDataUnsafe.user.language_code) // код языка пользователя

//Отправляем данные о выбранном товаре
//Отправляем данные о выбранном товаре
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    let query_id = tg.initDataUnsafe.query_id
    answerWebAppQuery(tg.initDataUnsafe.query_id);
 });
 
 async function answerWebAppQuery(query_id) {
   //Переводим мапу в строку для вставки в запрос и экранируем кавычки в сообщении
   //let message = JSON.stringify(Array.from(bucket.entries())).replace(/\"/g, "\\\"");
   //Создаём запрос
    let url = 'https://api.telegram.org/bot5558689984:AAHktTbnkTXsBAdPX59CuBeqYC1gkmUC2pE/answerWebAppQuery?web_app_query_id=' + 
                tg.initDataUnsafe.query_id + '&result={"type":"article","id":123,"title":"123","message_text":"'+ message +'"}'
    console.log(url);
    //Отправляем данные в бота
    fetchAsync(url);
 }
