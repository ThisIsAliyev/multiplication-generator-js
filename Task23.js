
var x,y;
var score = JSON.parse(localStorage.getItem('score'));

function numbers() {
    x = Math.floor(Math.random()*10);
    y = Math.floor(Math.random()*10);
}

function info() {
    numbers();
    document.querySelector('.score').textContent = `Your score: ${score}`;
    document.querySelector('.result').textContent =`What's ${x} multiply ${y}?`;
}

function buttonClick() {
    var input = parseInt(document.querySelector('input').value);
    if(input == x*y) {
        score++;
    }
    else {
        score--;
    }
    info();
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('input').value = '';
}
info();