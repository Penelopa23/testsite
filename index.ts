let tg = window.Telegram.WebApp; // Достаем обьект

tg.expand(); //растягиеваем страницу на весь экран

tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом
tg.initData //получаем данные от пользователя в виде строки (работает только при запуске из меню команд бота). 
tg.initDataUnsafe // получаем данные от пользователя в виде объекта (работает только при запуске из меню команд бота). 
tg.isExpanded // возвращает true, если приложение открыто на всю высоту, false - если нет. 
tg.viewportHeight // вернёт ширину окна.
//tg.sendData(data) // отправляет данные  боту в строковом виде, после чего закрывает приложение (работает только если приложение запущено с keyboard button). 
tg.ready() // метод позволяет отследить, когда приложение готово к отображению. 
//tg.close() // метод закрывает приложение.

tg.MainButton.text // текст кнопки, по умолчанию: "Continue"
tg.MainButton.color // цвет текста
tg.MainButton.textColor // цвет подложки
tg.MainButton.isVisible // видна ли кнопка (по умолчанию false) 
console.log(tg.MainButton.isActive); // активна ли кнопка (по умолчанию true)
// tg.MainButton.setText(text) //  метод для задания текста
//tg.MainButton.onClick(callback) // метод при нажатии на кнопку
tg.MainButton.show() // показать кнопку 
// tg.MainButton.hide() // скрыть кнопку
tg.MainButton.enable() // сделать активной 
// tg.MainButton.disable() // сделать неактивной 
//tg.MainButton.setParams(params) // задает параметры в виде объекта 
tg.MainButton.setText("Pay "); //Вставляем техт в кнопку
tg.MainButton.show(); //Показываем кнопку

tg.initDataUnsafe.user.id // уникальный идентификатор пользователя
tg.initDataUnsafe.user.isBot // бот ли пользователь (true/false)
tg.initDataUnsafe.user.first_name // имя пользователя
tg.initDataUnsafe.user.last_name // "фамилия" пользователя
tg.initDataUnsafe.user.username // username пользователя
tg.initDataUnsafe.user.language_code // код языка пользователя

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("some string that we need to send"); 
	//при клике на основную кнопку отправляем данные в строковом виде
});

async function answerWebAppQuery(query_id) {
    //Создаём запрос
     let url = 'https://api.telegram.org/bot5558689984:AAHktTbnkTXsBAdPX59CuBeqYC1gkmUC2pE/answerWebAppQuery?web_app_query_id=' + 
                 tg.initDataUnsafe.query_id + '&result={"type":"article","id":123,"title":"123","message_text":"TEST"}'
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
