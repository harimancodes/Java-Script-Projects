'use strict'

let number = Number(Math.floor(Math.random() * 100))
let highScore = 0,
    score = 100;

function check() {
    const guess = Number(document.querySelector('input').value)
    if (!guess) {
        document.querySelector('.statusText h1').textContent = "❌ Wrong input!"
        return
    }
    if (guess > 2 * number) {
        document.querySelector('.statusText h1').textContent = "⏫ Too High!"
        updateScore(10)
        return
    }
    if (2 * guess < number) {
        document.querySelector('.statusText h1').textContent = "⏬ Too Low!"
        updateScore(10)
        return
    }
    if (guess > number) {
        document.querySelector('.statusText h1').textContent = "🔼 High!"
        updateScore(5)
        return
    }
    if (guess < number) {
        document.querySelector('.statusText h1').textContent = "🔽 Low!"
        updateScore(5)
        return
    }
    if (guess == number) {
        document.querySelector('.statusText h1').textContent = "🎉 Correct Number!"
        document.body.style.background = "#2fa623"
        document.querySelector('input').style.background = "#2fa623"
        const currentScore = Number(document.querySelector('.score h2').textContent);
        if (highScore == 0) {
            document.querySelector('.message h1').textContent = "You Won!"
            highScore = score;
        } else {
            if (currentScore > highScore)
                highScore = currentScore;
            if (highScore == 100)
                document.querySelector('.message h1').textContent = "You have mastered the art of guessing!"
            else document.querySelector('.message h1').textContent = "You are improving!"
        }
        document.querySelector('.highScore h2').textContent = highScore;
        document.querySelector('input').disabled = true
        document.querySelector('.check button').disabled = true
        return
    }
}

function updateScore(decre) {
    score = score - decre;
    if (score <= 0) {
        document.querySelector('.statusText h1').textContent = "👎🏼 You Lose!"
        document.body.style.background = "#d40404"
        document.querySelector('input').style.background = "#d40404"
        document.querySelector('input').disabled = true
        document.querySelector('.check button').disabled = true
        document.querySelector('.message h1').textContent = "Play again!"
    }
    document.querySelector('.score h2').textContent = score;
}

function reset() {
    score = 100;
    document.querySelector('.statusText h1').textContent = "🤔 Start guessing..."
    document.body.style.background = "#000000"
    document.querySelector('input').style.background = "#000000"
    document.querySelector('input').value = ""
    document.querySelector('.score h2').textContent = score;
    document.querySelector('.message h1').textContent = ""
    if (highScore == 100) {
        highScore = 0;
        document.querySelector('.highScore h2').textContent = highScore;
    }
    document.querySelector('input').disabled = false
    document.querySelector('.check button').disabled = false
    number = Number(Math.floor(Math.random() * 100))
}