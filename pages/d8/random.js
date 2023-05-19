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

  switch (getTirageDe(8)) {
    case 1:
      img.src = `../../img/d8/1dice8.svg`;
      break;
    case 2:
      img.src = `../../img/d8/2dice8.svg`;
      break;
    case 3:
      img.src = `../../img/d8/3dice8.svg`;
      break;
    case 4:
      img.src = `../../img/d8/4dice8.svg`;
      break;
    case 5:
      img.src = `../../img/d8/5dice8.svg`;
      break;
    case 6:
      img.src = `../../img/d8/6dice8.svg`;
      break;
    case 7:
      img.src = `../../img/d8/7dice8.svg`;
      break;
    case 8:
      img.src = `../../img/d8/8dice8.svg`;
      break;
  }

  playSound();
});
