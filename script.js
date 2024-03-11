const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');


const imgArr = ['./imajes/american-football.jpg', './imajes/caucasian-professional-female-runner.jpg', './imajes/piln.jpg', './imajes/Weight.jpg'];

let currentIndex = 0;

function changeIndex(ind) {
  currentIndex = ind;
  slide(currentIndex)
}

function nextIndex(direction) {
  currentIndex += direction;
  if (currentIndex >= imgArr.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = imgArr.length - 1;
  };
  slide(currentIndex);
}

function slide(index) {
  img.style.display = 'none';
  setTimeout(() => {
    img.style.display = 'block';
  }, 0);
  

  img.src = imgArr[index];

  updateDots(index);
};
function updateDots (index){
  for(let dot of dots) {
    dot.classList.remove('active');
  }
  dots[index].classList.add('active');
}

const text = 'When \t\n you play a \t\n game of thrones you win or you die.';


const truncate = (text, length) => {
 const textSlice = text.slice(0, length);
  return `${textSlice}...`;
  ;
};
console.log(truncate('Helloyt', 5));

// modal window

const btn = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const clodeBtn = document.querySelector('.modal__close');

btn.onclick = () => {
  modal.classList.add('modal_active');

  clodeBtn.addEventListener('click', cloceModal);

  modal.addEventListener('click', hideModal)

  function cloceModal() {
    modal.classList.remove('modal_active');
    clodeBtn.removeEventListener('click', cloceModal);
    modal.removeEventListener('click', hideModal);
  }

  function hideModal(event) {
    if(event.target === modal){
      cloceModal();
    }
  }
};


// write javascript code for Tabs

const tabsHead = document.querySelectorAll('.tab__head-item');
const contents = document.querySelectorAll('.tab__content-item');

tabsHead.forEach((tab, index) => {
tab.onclick = () => {
  changeTab(index);
};
});

function changeTab(index) {
  for(let tab of tabsHead){
    setActiveClass(tabsHead, index);
    setActiveClass(contents, index);
  }

function setActiveClass (arr, index) {
  for(let elem of arr){
    elem.classList.remove('active');
  }
  arr[index].classList.add('active');
}}

// training js.

// const getHiddenCard = (numb, star = 4) => {
//   let sliceNumb = numb.slice(-4);
//   let quanStar = '*'.repeat(star)
//   return `${sliceNumb}${quanStar}`;
// };
// console.log(getHiddenCard('12345678911145', 5));


// const  capitalize = (str) => {
//   let strSlice = str[0].toUpperCase() + str.slice(1);
//   return strSlice;
// }
// console.log(capitalize('dartgh'));

// const  capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
// console.log(capitalize('artgh'));