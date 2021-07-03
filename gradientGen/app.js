const next = document.querySelector(".next");
const gradient = document.querySelector(".gradient-container");
let prev, curr;

next.addEventListener("click", function(){
  let one = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  let two = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  
  gradient.style.background = `linear-gradient(to right, ${one}, ${two})`;
  
  // To keep record of the previous gradient
  prev = curr;
  curr = `linear-gradient(to right, ${one}, ${two})`;
})

function random(num) {
  return Math.floor(Math.random() * (num + 1));
}