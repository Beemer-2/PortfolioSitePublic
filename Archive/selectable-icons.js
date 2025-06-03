"use strict"

let icons = document.getElementsByClassName("hexagon-icon");
let hive = document.querySelector("#hive");
let terminalText = document.querySelector("#terminal-text");



//Dragging feature
// let isDown = false; //Marks if the hive container is held down or not
// let startX;
// let scrollLeft;

// hive.addEventListener("mousedown", (e) => {
//     startX = e.pageX - hive.offsetLeft;
//     scrollLeft = hive.scrollLeft;
//     isDown = true;
// });

// hive.addEventListener("mouseup", () => {
//     isDown = false;
// });

// hive.addEventListener("mouseleave", () => {
//     isDown = false;
// });

// hive.addEventListener("mousemove", (e) => {
//     if (!isDown) return; //makes sure weird stuff doesn't happen with scrolling
//     e.preventDefault();
//     const x = e.pageX - hive.offsetLeft;
//     const walk = (x - startX); 
//     hive.scrollLeft = scrollLeft - walk;
// });













for (const icon of icons) {
    icon.addEventListener("click", () => {
        console.log(icon.id)
        switch (icon.id) {
            case "python": untypeTerminal(">>> My programming journey started with Python. I have 3 years of experience in this language and I have made numerous projects with it.");
        }
    });
}

//Creates an asnyc delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Slowly untypes all the letters in the p
async function untypeTerminal(stringToType) {
    let lengthOfTerminalText = terminalText.textContent.length;

    for (let i = 0; i < lengthOfTerminalText; i++) {
        console.log(i)
        terminalText.textContent = terminalText.textContent.slice(0, terminalText.textContent.length - 1);
        await delay(20);
    }
    console.log(stringToType)
    setTimeout(()=>{typeTerminal(stringToType);}, 1000);
}

// <<recursive>>
//Slowly types out all letters from the string given
async function typeTerminal(str) {
    console.log(str)
    for (const letter of str) {
        console.log(letter)
        terminalText.textContent = terminalText.textContent + letter
        
        await delay(40);
    }
}

