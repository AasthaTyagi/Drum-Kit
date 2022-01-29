var buttons = document.querySelectorAll(".drum");
for (let k = 0; k < 7; k++) {
  buttons[k].addEventListener("click", function (event) {
    var cli = this.innerHTML;
    handler(cli);
  });
}
document.addEventListener("keydown", function (event) {
  handler(event.key);
});

function handler(key) {
  switch (key.toLowerCase()) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
  }
}
