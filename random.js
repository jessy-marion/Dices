let dice = document.querySelector(".image");
let img = document.querySelector(".img-svg");

// let sound = document.querySelector("image");


//fonction aléatoire

function getTirageDe(n) {
    return Math.floor(n * Math.random() + 1)
};


//fonction son au click 
function playSound() {
    const sound = document.querySelector(".sound");
    sound.play();
}

// eventlistener click avec fonction random détermine la face 
dice.addEventListener("click", () => {


    switch(getTirageDe(6)) {
        case 1:
            img.src = `./icons/Black/skoll/inverted-dice-1-blackbg.svg`;
            break;
        case 2:
            img.src = `./icons/Black/skoll/inverted-dice-2-blackbg.svg`;
            break;
        case 3:
            img.src = `./icons/Black/skoll/inverted-dice-3-blackbg.svg`;
            break;
        case 4:
            img.src = `./icons/Black/skoll/inverted-dice-4-blackbg.svg`;
            break;
        case 5:
            img.src = `./icons/Black/skoll/inverted-dice-5-blackbg.svg`;
            break;
        case 6:
            img.src = `./icons/Black/skoll/inverted-dice-6-blackbg.svg`;
            break;
        }
    
        playSound();
    })

   