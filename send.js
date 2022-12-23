let tg = window.Telegram.WebApp; // Достаем обьект

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
Telegram.WebApp.onEvent('mainButtonClicked', function(){
//     var wallet = document.getElementById('wallet');
//     var sum = document.getElementById('sum');
    tg.sendData("some string that we need to send")
//     tg.sendData(sum + ":" + wallet + ":" + tg.initDataUnsafe.user.id);
 });
 
 async function answerWebAppQuery(message) {
   //Создаём запрос
    let url = 'https://api.telegram.org/bot5558689984:AAHktTbnkTXsBAdPX59CuBeqYC1gkmUC2pE/answerWebAppQuery?web_app_query_id=' + 
                tg.initDataUnsafe.query_id + '&result={"type":"article","id":123,"title":"123","message_text":"'+ message +'"}'
    console.log(url);
    //Отправляем данные в бота
    fetchAsync(url);
 }

 //Метод отправкии сообщения боту
 async function fetchAsync (url) {
   fetch(url)
     .then(res => res.json())
     .then(json => console.log(json));
}
