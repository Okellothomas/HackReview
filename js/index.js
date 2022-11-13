// implementation. 

let cardOne = getRandom()
let cardTwo = getRandom()

cards = [cardOne, cardTwo]

let sum = cardOne + cardTwo

let isalive = true
let blackjack = false

let Play = document.getElementById("play")
let CardP = document.querySelector("#card")
let mySum = document.getElementById("sum")


function getRandom() {
    let random = Math.floor(Math.random() * 13) + 1
    return random
}

function startGame() {
    Result()
}

function Result() {
    if (sum <= 20) {
        Play.textContent = "You Can draw another Card"
        CardP.textContent = "Card:" + cards
        mySum.textContent = "Sum:" + sum
    }
    else if (sum === 21) {
        Play.textContent = "Congratulations! you have won a black jack!"
        CardP.textContent = "Card:" + cards
        mySum.textContent = "Sum:" + sum
        blackjack = true
    }

    else {
        Play.textContent = "You have lost the game!"
        CardP.textContent = "Card:" + cards
        mySum.textContent = "Sum:" + sum
        isalive = false
    }

}


function addCard() {

    if (isalive == true && blackjack == false) {
        let nextCard = getRandom()
        cards.push(nextCard)
        sum = sum + nextCard
        Result()
    }
    
}

