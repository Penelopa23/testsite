require('dotenv').load();

console.log(process.env.BOT_TOKEN);

let tg = window.Telegram.WebApp; //Get object
tg.BackButton.show();
tg.expand(); //Expand page

//Config mainButton
tg.MainButton.textColor = "#FFFFFF"; //Change text color on the mainButton from white to green
tg.MainButton.color = "#2cab37"; //Change color mainButton to green like in @DurgerKingBot
tg.MainButton.setText("SEND") //Put text on mainButton
tg.MainButton.show() // показать кнопку 

//Extra options
//tg.MainButton.isVisible //Boolean true or false (defualt false)
//tg.MainButton.onClick(callback) //Action after tap on mainButton
//tg.MainButton.hide() //Hide mainButton
//tg.MainButton.disable() //Make mainButton innactive

Telegram.WebApp.onEvent('backButtonClicked', function(){
  history.back();
});

//Send data tot bot after tap on button "SEND"
Telegram.WebApp.onEvent('mainButtonClicked', function(){
  var wallet = document.querySelector('#wallet').value;
  var sum = document.querySelector('#sum').value;
  if(ethers.utils.isAddress(wallet)) {
    if(checkNum(sum)) {
      let message = "Try to send " + sum + " USDT to " + wallet;
      tg.HapticFeedback.notificationOccurred("success");
      postAnswerWebAppQuery(message);
      tg.MainButton.disable();
    }else {
     tg.HapticFeedback.notificationOccurred("warning");
     alert("Sum must be more than 0")
    }
  }else{
    tg.HapticFeedback.notificationOccurred("warning");
    alert("Wallet address incorrect");
  }
});

 async function postAnswerWebAppQuery(message) {
  
  //Create request to bot
   postData("https://api.telegram.org/bot' + process.env.BOT_TOKEN + '/answerWebAppQuery",
          data={ 
               web_app_query_id: tg.initDataUnsafe.query_id, 
               result:{
                type:"article",  
                id:123, 
                title:"123", 
                input_message_content:{
                  message_text:message, 
                  description:"something" 
                }
              }
            });
}

 async function answerWebAppQuery(message) {

   //Create request to bot
    let url = 'https://api.telegram.org/bot' + process.env.BOT_TOKEN + '/answerWebAppQuery?web_app_query_id=' + 
                tg.initDataUnsafe.query_id + '&result={"type":"article","id":123,"title":"123","message_text":"'+ message +'"}'
   // console.log(url);
    
    //Send answer to bot
    fetchAsync(url);
 }

//Send post
const postData = async (url = '', data = {}) => {
  //Make request
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json(); 
}
 //Send answer to bot
 async function fetchAsync (url) {
   fetch(url)
     .then(res => res.json())
     .then(json => console.log(json));
}

//Check sum
function checkNum(num) {
  return  num > 0 && num < 999999999;
}
