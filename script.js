function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 100) % 3;
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scisors";
    }
}

console.log(computerPlay());