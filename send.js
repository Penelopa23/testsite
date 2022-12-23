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

//Отправляем данные о выбранном товаре
Telegram.WebApp.onEvent('mainButtonClicked', function(){
    var wallet = document.getElementById('wallet').nodeValue;
    var sum = document.getElementById('sum').nodeValue;
    let message = sum + ":" + wallet;
    answerWebAppQuery(message);
 });
 
 
  async function answerWebAppQuery(message) {
   //Создаём запрос
    let url = 'https://api.telegram.org/bot5558689984:AAHktTbnkTXsBAdPX59CuBeqYC1gkmUC2pE/answerWebAppQuery?web_app_query_id=' + 
    tg.initDataUnsafe.query_id + '&result={"type":"article","id":' + tg.initDataUnsafe.query_id + ',"title":"123","message_text":"' +
    message +'"}'
    console.log(url);
//     Отправляем данные в бота
//     tg.answerWebAppQuery(tg.initDataUnsafe.query_id, {
//         type: 'article',
//         id: tg.initDataUnsafe.query_id,
//         title: 'Done',
//         input_message_content: {
//             message_text: 'You money was send'
//         }
//     })
    fetchAsync(url);
 }

 //Метод отправкии сообщения боту
 async function fetchAsync (url) {
   fetch(url)
     .then(res => res.json())
     .then(json => console.log(json));
}
