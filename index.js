var n = 0;
while (n < 7) {
  document.querySelectorAll(".drum")[n].addEventListener("click", buttonClick)
  n++;
}


function buttonClick() {

  makeSound(this.innerHTML);
  animation(this.innerHTML);
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  animation(event.key);
})


function makeSound(input) {


  switch (input) {
    case "w":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;
    case "a":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;

    case "s":
      var tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;
    case "d":
      var tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
  }

}

function animation(input){
  currentKey= "."+input
  document.querySelector(currentKey).classList.add("pressed")
document.querySelector(currentKey).style.color="green"
  setTimeout(function(){
    document.querySelector(currentKey).classList.remove("pressed")
    document.querySelector(currentKey).style.color="#DA0463"
  },100)
}



// var audio = new Audio(soundFile);
// audio.play();
