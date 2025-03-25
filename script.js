const startButton = document.getElementById('start-button');
const instructionsSection = document.getElementById('instructions');
const gameAreaSection = document.getElementById('game-area');
const resultSection = document.getElementById('result');
const guessInput = document.getElementById('guess');
const guessButton = document.getElementById('guess-button');
const messageParagraph = document.getElementById('message');
const attemptsSpan = document.getElementById('attempts');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-button');
const guessHistorySpan = document.getElementById('guess-history');

let game = {
    randomNumber: null,
    attempts: 0,
    guessHistory: [],

    startGame: function() {
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
        this.guessHistory = [];}
    }        