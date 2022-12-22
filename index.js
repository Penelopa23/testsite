let tg = window.Telegram.WebApp; // Достаем обьект

tg.expand(); //растягиеваем страницу на весь экран

tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом

tg.MainButton.setText("Pay "); //Вставляем техт в кнопку
tg.MainButton.show(); //Показываем кнопку

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
