const cookie = document.querySelector('#gameCookie');
const powerUp = document.querySelector('#multiplierButton');
const autoUp = document.querySelector('#autoCookieButton');
const multiplierButtonPrice = document.querySelector('#multiplierButtonPrice');
const winnerWinner = document.getElementById('youWinButton');
cookieCount = 0;
scoreIncreaser = 1;
multiplierPrice = 50;
autoPrice = 100;
winPrice = 10000;

if(cookie){
    cookie.addEventListener("click", addScore);
}

function addScore() {
    cookieCount += scoreIncreaser;
    const newScore = document.getElementById("cookieCount");
    newScore.innerHTML = `${cookieCount}`;
}

if(powerUp){
    powerUp.addEventListener("click", multiplierPowerUp);
}

function multiplierPowerUp() {
    if ((cookieCount >= multiplierPrice)) {
        cookieCount = cookieCount - multiplierPrice;
        scoreIncreaser = scoreIncreaser * 2;
        multiplierPrice = multiplierPrice * 2;
        multiplierButtonPrice.innerHTML = `Price: ${multiplierPrice}`;
        return cookieCount;
    }
}

if(autoUp){
    autoUp.addEventListener("click", autoPowerUp);
}

function autoPowerUp() {
    if (cookieCount >= autoPrice) {
        cookieCount = cookieCount - autoPrice;
        autoPrice = autoPrice * 3;
        autoCookieButtonPrice.innerHTML = `Price: ${autoPrice}`;
        return cookieCount;
    }
}

function crownTransfer() {
    if ((cookieCount >= winPrice)) {
        winnerWinner.addEventListener('click', function()) {
    }
}
}
