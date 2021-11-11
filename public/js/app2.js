// Mängijad 1 ja 2 objektidena
const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
};

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
};

// Reset nupp ja select valikud
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

// Algseis (3) ja mäng ei ole läbi
let winningScore = 3;
let isGameOver = false;

// Mängijate andmete uuendamine
function updateScores(player, opponent) {
    if(!isGameOver) { // Kui mäng ei ole läbi
        player.score += 1; // Suurendab skoori ühe võrra
        if(player.score === winningScore) {
            isGameOver = true; // Mäng on läbi
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score; // Muudab lehel vastava mängija skoori
    }
}
// Mängija 1 nupu funktsionaalsus
p1.button.addEventListener("click", function() {
    updateScores(p1, p2);
});
// Mängija 2 nupu funktsionaalsus
p2.button.addEventListener("click", function() {
    updateScores(p2, p1);
});

// Reset nupu funktsionaalsus
resetButton.addEventListener("click", reset); // Klikkides kutsutakse välja funktsioon reset

// Kui mängude arvu numbrit muudetakse
winningScoreSelect.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset();
});

/** Taastab mängu algseisu */
function reset() {
    isGameOver = false;
    for(let player of [p1, p2]) { // Mõlema mängija andmed algseisu
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove("has-text-success", "has-text-danger"); // Stiilide eemaldamine
        player.button.disabled = false; // Nupud uuesti aktiivseks
    }
};

