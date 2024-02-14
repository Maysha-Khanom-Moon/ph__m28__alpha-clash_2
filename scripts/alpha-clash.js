function play(now) {
    // hidden the current interface and start the game
    hidden(now);

    gameLoop();
}

function gameLoop() {
    // step - 1: generate a random letter
    const char = getRandomLetter();

    // step - 2: show the letter
    const showBar = document.getElementById('show-bar');
    showBar.innerText = char;

    // step - 3: set bg-color of char
    setBG(char);
}