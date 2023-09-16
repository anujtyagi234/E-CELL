const squareElements = document.querySelectorAll('.square');
let myArray = [];
let index = 0;

squareElements.forEach((square) => {
  square.addEventListener('click', () => {
    square.style.backgroundColor = 'red';
    const squareId = square.id;
    myArray.push(squareId);

    if (squareId == 9) {
      setTimeout(() => {
        changeColor();
      }, 500);
    }
  });
});

function changeColor() {
  if (index < myArray.length) {
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
