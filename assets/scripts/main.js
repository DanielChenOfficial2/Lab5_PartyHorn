// main.js

// TODO
let volnumElement = document.getElementById('.volume-number');
let volsliderElement = document.getElementById('.volume-slider');
let imageElement = document.getElementById('.volume-image');
let hornaudioElement = document.getElementById('.horn-sound');
let airhornElement = document.getElementById('.radio-air-horn');
let carhornElement = document.getElementById('.radio-car-horn');
let partyhornElement = document.getElementById('.radio-party-horn');
let honkbuttonElement = document.getElementbyId('honk-btn');
let hornimageElement = document.getElementById('sound-image');

volnumElement.addEventListener('input', (event) => {
  let result = volnumElement.valueAsNumber();
  hornaudioElement.volume = result * 0.01;
  volsliderElement.value = result;
  if (value == 0) {
    imageElement.src = "./volume-level-0.svg";
    honkbuttonElement.disabled = true;
  }
  else if (value >= 1 && value <= 33) {
    imageElement.src = "./volume-level-1.svg";
    honkbuttonElement.disabled = false;
  }  
  else if (value >= 34 && value <= 66) {
     imageElement.src = "./volume-level-2.svg";
     honkbuttonElement.disabled = false;
  }  
  else {
    imageElement.src = "./volume-level-3.svg";
    honkbuttonElement.disabled = false;
  }  
});

volsliderElement.addEventListener('input, (event) => {
  let result = volsliderElement.valueAsNumber();
  hornaudioElement.volume = result * 0.01;
  volnumElement.value = result;
  if (value == 0) {
    imageElement.src = "./volume-level-0.svg";
    honkbuttonElement.disabled = true;
  }
  else if (value >= 1 && value <= 33) {
    imageElement.src = "./volume-level-1.svg";
    honkbuttonElement.disabled = false;
  }  
  else if (value >= 34 && value <= 66) {
     imageElement.src = "./volume-level-2.svg";
     honkbuttonElement.disabled = false;
  }  
  else {
    imageElement.src = "./volume-level-3.svg";
    honkbuttonElement.disabled = false;
  }  
});

airhornElement.addEventListener('input, (event) => {
  hornaudioElement.volume = 0.01;
  hornimageElement.src = "./assets/media/images/air-horn.svg";
});

carhornElement.addEventListener('input, (event) => {
  hornaudioElement.volume = 0.02;
  hornimageElement.src = "./assets/media/images/car-horn.svg";
});

partyhornElement.addEventListener('input, (event) => {
  hornaudioElement.volume = 0.03;
  hornimageElement.src = "./assets/media/images/party-horn.svg";
});

honkbuttonElement.addEventListener('input, (event) => {
  hornaudioElement.play();
});

