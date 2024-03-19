const cookie = document.querySelector('#gameCookie');
score = 0;

if(cookie){
    cookie.addEventListener("click", addScore);
}

function addScore(){
    console.log("hi");
}