var keys= document.querySelectorAll("button");

//drum button press
for(var i=0;i<keys.length;i++){
  keys[i].addEventListener("click",function(){
    var text= this.innerHTML;
    makeSound(text);
    buttonAnimation(text);

  });
}

//detecting keyboardpress
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
//console.log(event);
//KeyboardEvent {isTrusted: true, key: "a", code: "KeyA", location: 0, ctrlKey: false, …}

function makeSound(key){

  switch (key) {

    case "w" :
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

    case "a" :
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case "s" :
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case "d" :
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    case "j" :
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;

    case "k" :
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;

    case "l" :
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    default: console.log("Technical error");


  }
}


function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(function () {
  activeButton.classList.remove("pressed");

}, 50);
}
