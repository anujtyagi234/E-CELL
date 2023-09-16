const squareElements = document.querySelectorAll('.square');
let myArray = [];
let index = 0;

squareElements.forEach((square) => {
  square.addEventListener('click', () => {
    square.style.backgroundColor = '#7e0707';
    const squareId = square.id;
    myArray.push(squareId);

    if (squareId == 'box9') {
      setTimeout(() => {
        changeColor();
      }, 500);
    }
  });
});

function changeColor() {
  if (index < myArray.length-1) {
    const elementId = document.getElementById(myArray[index]);
    elementId.style.backgroundColor = 'rgb(0, 0, 159)';
    index++;

    setTimeout(() => {
      changeColor();
    }, 500);
  }
  else{
      myArray=[];
      index=0;
  }
}

function toggleNavbar() {
  const links = document.querySelector('.links');
  links.classList.toggle('active');
  const menu = document.querySelector('.mobile-navbar');
  menu.classList.toggle('active');
  const cross = document.querySelector('.cross');
  cross.classList.toggle('active');
}
