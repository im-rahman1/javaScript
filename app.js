let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr);

let curr = arr.length-1;

function prev() {
  let index = curr--;
  console.log(arr[index]);
}

function next() {
  let index = ++curr;
  console.log(arr[index]);
}

const container = document.querySelector(".container");

function createText(text){
  const div = document.createElement('div');
  const p = document.createElement('p');
  const textNode = document.createTextNode(text);
  p.appendChild(textNode);
  div.appendChild(p);
  container.appendChild(div);
  p.className = "output";
  div.className = "outputContainer"

  console.log(div);
}

createText("hello everyone! How are you? hello everyone! How are you? hello everyone! How are you?");