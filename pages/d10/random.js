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

  switch (getTirageDe(10)) {
    case 1:
      img.src = `../../img/d10/1dice10.svg`;
      break;
    case 2:
      img.src = `../../img/d10/2dice10.svg`;
      break;
    case 3:
      img.src = `../../img/d10/3dice10.svg`;
      break;
    case 4:
      img.src = `../../img/d10/4dice10.svg`;
      break;
    case 5:
      img.src = `../../img/d10/5dice10.svg`;
      break;
    case 6:
      img.src = `../../img/d10/6dice10.svg`;
      break;
    case 7:
      img.src = `../../img/d10/7dice10.svg`;
      break;
    case 8:
      img.src = `../../img/d10/8dice10.svg`;
      break;
    case 9:
      img.src = `../../img/d10/9dice10.svg`;
      break;
    case 10:
      img.src = `../../img/d10/10dice10.svg`;
      break;
  }

  playSound();
});
