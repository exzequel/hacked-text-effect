
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    setInterval((){
        event.target.innerText = event.target.innerText.split("")
            .map(letter = letters[Math.floor(Math.random() * 26)])
            .join("");
    }, 30)
}

