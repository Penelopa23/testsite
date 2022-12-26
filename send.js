let tg = window.Telegram.WebApp; // Достаем обьект

tg.expand(); //растягиеваем страницу на весь экран

tg.MainButton.textColor = "#FFFFFF"; //Меняем цвет текста кнопки заказа на белый
tg.MainButton.color = "#2cab37"; //Меняем цвет самой кнопки на зеленый как в @DurgerKing она созда]теся телеграмом

tg.MainButton.setText("SEND") //  метод для задания текста
//tg.MainButton.onClick(callback) // метод при нажатии на кнопку
// tg.MainButton.hide() // скрыть кнопку
 tg.MainButton.disable() // сделать неактивной 

tg.MainButton.show(); //Показываем кнопку
// if(tg.initDataUnsafe.user.id == 179755741) {
//     tg.MainButton.enable() // сделать активной 
// }else {
     
// }

tg.onEvent('mainButtonClicked', function(){
    var wallet = document.querySelector("#wallet").value;
    var sum = document.querySelector("#sum").value;
     if(ethers.utils.isAddress(wallet)) {
      if(checkNum()) {
         let message = "Try to send " + sum + " USDT to " + wallet;
          answerWebAppQuery(message);
      }else {
            alert("Check sum, it must be more than 0");
      }
     }else{
          alert("Check the correctness of wallet address or sum, it must be more than 0");
    }
 });
 
 
  async function answerWebAppQuery(message) {
   //Создаём запрос
    let url = 'https://api.telegram.org/bot5558689984:AAHktTbnkTXsBAdPX59CuBeqYC1gkmUC2pE/answerWebAppQuery?web_app_query_id=' + 
                tg.initDataUnsafe.query_id + '&result={"type":"article","id":123,"title":"123","message_text":"'+ message +'"}'
    fetchAsync(url);
 }

 //Метод отправкии сообщения боту
 async function fetchAsync (url) {
   fetch(url)
     .then(res => res.json())
     .then(json => console.log(json));
}

function checkNum(num) {
  return (num > 0) && (num < 999999999);
}

$('input[type="text"]').keyup(function() {
  if(ethers.utils.isAddress(document.querySelector('#wallet').value)) {
    $('input[type="number"]').keyup(function() {
      if(document.querySelector('#sum').value < 999 && document.querySelector('#sum').value > 0) {
        console.log("You're idiot 2");
        tg.MainButton.enable();
      }else {
        tg.MainButton.disable();
      }
    });
    tg.MainButton.disable();
  }else {
    tg.MainButton.disable();
  }
});
