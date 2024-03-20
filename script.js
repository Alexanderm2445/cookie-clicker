const cookie = document.querySelector('#gameCookie');
score = 0;
scoreIncreaser = 1;

if(cookie){
    cookie.addEventListener("click", addScore);
}

function addScore(){
    const changeText = document.querySelector("#cookieCount");

changeText.addEventListener("click", function()) {
  changeText.textContent = score;
  score = score + scoreIncreaser;
}
    cookieCount = score;
}