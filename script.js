let result;

function rockPaperScissors () {
    let random = Math.floor((Math.random() * 3) + 1);
    if (random === 1) {
        random = "rock";
    } else if (random === 2) {
        random = "paper";
    } else {
        random = "scissors"
    }
    result = random;
    return random;
    
}

const form = document.getElementById("user_input");
let input = document.getElementById("user_pick");
const results = document.getElementById("result");

form.addEventListener("submit", (e) => {
    rockPaperScissors();
    e.preventDefault();
    let userPick = input.value;
    let h3 = document.createElement("h3");
    if ( result === userPick.toLocaleLowerCase() ) {
        h3.innerHTML = `${result} you win!`;
        results.appendChild(h3);
    } else {
        h3.innerHTML = `${result} you lose!`;
        results.appendChild(h3);
    }
    input.value = "";
                      
});