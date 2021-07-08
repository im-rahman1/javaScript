const divs = document.querySelectorAll("div");
divs.forEach(function(el, index) {
  el.addEventListener("click", function(e) {
    console.log(this);
    this.style.backgroundColor = randomColor();
  })
})

function randomColor(){
  return `rgb(${random(255)}, ${random(255)}, ${random(255)}`;
}

function random(num) {
  return Math.floor(Math.random() * (num + 1));
}
