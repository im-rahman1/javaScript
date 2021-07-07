document.body.onload = next;

const gradient = document.querySelector(".gradient-container");

let tempArr = [];
let pointer = tempArr.length-1;

function gradientGen() {
  let one = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  let two = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  let gradient = `linear-gradient(to right, ${one}, ${two})`
  // console.log(gradient);
  return gradient;
}

function random(num) {
  return Math.floor(Math.random() * (num + 1));
}

function next() {
  if(pointer == tempArr.length-1) {
    let newColor = gradientGen();
    gradient.style.background = newColor;
    tempArr.push(newColor);
    // console.log('if');
    pointer++;

    showOutput(newColor);
  }
  else if (pointer <= tempArr.length-1) {
    let nextColor = tempArr[++pointer];
    gradient.style.background = nextColor;
    // console.log("elseif");

    showOutput(nextColor);
  }
}

function previous() {
  if(pointer) {
    let prevColor = tempArr[--pointer];
    gradient.style.background = prevColor;
    // console.log("preIf");
    showOutput(prevColor);
  }
  else {
    console.log("end");
  }
}

// To Display output in the gradientContainer
function showOutput(text) {
  const checker = document.querySelector(".output");

  if(!checker) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const textNode = document.createTextNode(text);
    p.appendChild(textNode);
    div.appendChild(p);
    gradient.appendChild(div);
    p.className = "output";
    div.className = "outputContainer"
    // console.log(div);
  }
  else {
    checker.innerHTML = text;
  }

}
