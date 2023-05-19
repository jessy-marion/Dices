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

  switch (getTirageDe(12)) {
    case 1:
      img.src = `../../img/d12/1dice12.svg`;
      break;
    case 2:
      img.src = `../../img/d12/2dice12.svg`;
      break;
    case 3:
      img.src = `../../img/d12/3dice12.svg`;
      break;
    case 4:
      img.src = `../../img/d12/4dice12.svg`;
      break;
    case 5:
      img.src = `../../img/d12/5dice12.svg`;
      break;
    case 6:
      img.src = `../../img/d12/6dice12.svg`;
      break;
    case 7:
      img.src = `../../img/d12/7dice12.svg`;
      break;
    case 8:
      img.src = `../../img/d12/8dice12.svg`;
      break;
    case 9:
      img.src = `../../img/d12/9dice12.svg`;
      break;
    case 10:
      img.src = `../../img/d12/10dice12.svg`;
      break;
    case 11:
      img.src = `../../img/d12/11dice12.svg`;
      break;
    case 12:
      img.src = `../../img/d12/12dice12.svg`;
      break;
  }

  playSound();
});
