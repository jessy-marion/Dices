let dice = document.querySelector(".image");
let img = document.querySelector(".img-svg");

// let sound = document.querySelector("image");

//fonction aléatoire

function getTirageDe(n) {
  return Math.floor(n * Math.random() + 1);
}

//fonction son au click
function playSound() {
  const sound = document.querySelector(".sound");
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

// eventlistener click avec fonction random détermine la face
dice.addEventListener("click", () => {
  if (!dice.classList.contains("shake-dice")) {
    dice.classList.add("shake-dice");
  }

  dice.addEventListener(
    "animationend",
    () => {
      dice.classList.remove("shake-dice");
    },
    { once: true }
  );

  switch (getTirageDe(4)) {
    case 1:
      img.src = `../../img/d4/1dice4.svg`;
      break;
    case 2:
      img.src = `../../img/d4/2dice4.svg`;
      break;
    case 3:
      img.src = `../../img/d4/3dice4.svg`;
      break;
    case 4:
      img.src = `../../img/d4/4dice4.svg`;
      break;
  }

  playSound();
});
