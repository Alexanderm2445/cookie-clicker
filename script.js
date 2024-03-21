const cookie = document.querySelector('#gameCookie');
const powerUp = document.querySelector('#multiplierButton');
const multiplierButtonPrice = document.querySelector('#multiplierButtonPrice');
cookieCount = 0;
scoreIncreaser = 1;
multiplierPrice = 50;

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
        return cookieCount;
    }
    multiplierPrice = multiplierPrice * 2;
    multiplierButtonPrice.innerHTML = "The price is " + `${multiplierPrice}`;
    
}