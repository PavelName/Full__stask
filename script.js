const img = document.querySelector('.slider__image');


const imgArr = ['./imajes/american-football.jpg', './imajes/caucasian-professional-female-runner.jpg', './imajes/piln.jpg', './imajes/Weight.jpg'];

let currentIndex = 0;

function slide(direction) {
  currentIndex += direction;

  img.src = imgArr[currentIndex];
}