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

  switch (getTirageDe(20)) {
    case 1:
      img.src = `../../img/d20/1dice20.svg`;
      break;
    case 2:
      img.src = `../../img/d20/2dice20.svg`;
      break;
    case 3:
      img.src = `../../img/d20/3dice20.svg`;
      break;
    case 4:
      img.src = `../../img/d20/4dice20.svg`;
      break;
    case 5:
      img.src = `../../img/d20/5dice20.svg`;
      break;
    case 6:
      img.src = `../../img/d20/6dice20.svg`;
      break;
    case 7:
      img.src = `../../img/d20/7dice20.svg`;
      break;
    case 8:
      img.src = `../../img/d20/8dice20.svg`;
      break;
    case 9:
      img.src = `../../img/d20/9dice20.svg`;
      break;
    case 10:
      img.src = `../../img/d20/10dice20.svg`;
      break;
    case 11:
      img.src = `../../img/d20/11dice20.svg`;
      break;
    case 12:
      img.src = `../../img/d20/12dice20.svg`;
      break;
    case 13:
      img.src = `../../img/d20/13dice20.svg`;
      break;
    case 14:
      img.src = `../../img/d20/14dice20.svg`;
      break;
    case 15:
      img.src = `../../img/d20/15dice20.svg`;
      break;
    case 16:
      img.src = `../../img/d20/16dice20.svg`;
      break;
    case 17:
      img.src = `../../img/d20/17dice20.svg`;
      break;
    case 18:
      img.src = `../../img/d20/18dice20.svg`;
      break;
    case 19:
      img.src = `../../img/d20/19dice20.svg`;
      break;
    case 20:
      img.src = `../../img/d20/20dice20.svg`;
      break;
  }

  playSound();
});
