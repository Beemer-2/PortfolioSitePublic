"use strict"

let titles = ["software developer", "game developer", "back-end developer", "front-end developer", "hard worker", "team player"];
let iAmATypingSpan = document.querySelector("#i-am-a-typing-span");

//Gets a random title from the "titles" array
function getRandomTitle() {
    return titles[(Math.floor(Math.random() * titles.length) + 1) - 1];
}

//Creates an asnyc delay
function delay(ms) {
    console.log("a")
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Slowly untypes all the letters in the p
async function untype(numberOfLettersToUntype) {
    for (let i = 0; i < numberOfLettersToUntype; i++) {
        iAmATypingSpan.textContent = iAmATypingSpan.textContent.slice(0, iAmATypingSpan.textContent.length - 1);
        await delay(100);
    }

    setTimeout(()=>{type();}, 1000);
}

// <<recursive>>
//Slowly types out all letters from the random title in the p
async function type() {
    let randomTitle = getRandomTitle();

    
    for (const letter of randomTitle) {
        iAmATypingSpan.textContent += letter;
        await delay(160);
    }
    
    setTimeout(()=>{untype(randomTitle.length);}, 2000);
}

//Runs the type recursive func after 2 seconds
setTimeout(()=>{type();}, 2000)
