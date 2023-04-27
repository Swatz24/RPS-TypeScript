"use strict";
const hands = ["rock", "paper", "scissors"];
let hand1;
let hand2;
function getHand() {
    return hands[Math.floor(Math.random() * 10) % 3];
}
const player1 = {
    name: "James",
    wins: 0,
    getHand: getHand,
};
const player2 = {
    name: "John",
    wins: 0,
    getHand: getHand,
};
let winner = {
    name: "",
    wins: 0,
};
// play  and determine winner based on hands played
function playRound(Play1, Play2) {
    let hand1 = Play1.getHand();
    let hand2 = Play2.getHand();
    if (hand1 === hand2) {
        console.log("It's a tie. Round: " +
            Play1.name +
            "'s hand= " +
            hand1 +
            " & " +
            Play2.name +
            "'s hand = " +
            hand2);
        return "It's a tie game";
    }
    else {
        if ((hand1 === "rock" && hand2 === "scissors") ||
            (hand1 === "paper" && hand2 === "rock") ||
            (hand1 === "scissors" && hand2 === "paper")) {
            winner.name = Play1.name;
            Play1.wins++;
            winner.wins = Play1.wins;
        }
        else {
            winner.name = Play2.name;
            Play2.wins++;
            winner.wins = Play2.wins;
        }
        console.log("Winner = " +
            winner.name +
            ", Round: " +
            Play1.name +
            "'s hand= " +
            hand1 +
            " & " +
            Play2.name +
            "'s hand = " +
            hand2);
        winner = { name: winner.name, wins: winner.wins };
        return winner;
    }
}
console.log("Winner of the game is", playRound(player1, player2));
// // Define a function called playGame() that takes arguments player1, player2, and playUntil
function playGame(playerOne, playerTwo, playUntil) {
    let temp = "";
    playerOne.wins = 0;
    playerTwo.wins = 0;
    while (playerOne.wins < playUntil && playerTwo.wins < playUntil) {
        temp = playRound(playerOne, playerTwo);
    }
    if (playerOne.wins === playUntil) {
        console.log("Game Over! " +
            playerOne.name +
            " wins the game with " +
            playerOne.wins +
            " wins!");
        return temp;
    }
    else {
        console.log("Game Over! " +
            playerTwo.name +
            " wins the game with " +
            playerTwo.wins +
            " wins!");
        return temp;
    }
}
// Play 5 games
console.log("Winner is player with 5 wins :", playGame(player1, player2, 5));
