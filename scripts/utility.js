function hidden(now) {
    const home = document.getElementById(now);
    // home.classList.add('hidden')
    home.setAttribute('hidden', 'true');

    const playground = document.getElementById('play-ground');
    playground.classList.remove('hidden');
}

// random alphabate generator

function getRandomLetter() {
    // get or create an alphabet array;
    const alphabate = 'abcdefghijklmnopqrstuvwxyz';
    const letters = alphabate.split('');

    // get a random index
    const randomIndex = Math.round(Math.random() * 25);
    // or Math.floor(Math.random() * 26);

    return letters[randomIndex];
}


// add bg-color
function setBG(char) {
    const key = document.getElementById(char);
    key.classList.add('bg-[#FFA500]')
}