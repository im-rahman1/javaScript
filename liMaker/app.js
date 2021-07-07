const mainList = document.querySelector("ul");
const inputEle = document.querySelector('input');
const clicker = document.getElementById('clicker');

clicker.addEventListener('click', function(){
  if(inputEle.value.length > 3) {
    let li = document.createElement('li');
    let tempText = document.createTextNode(inputEle.value);
    li.appendChild(tempText);
    mainList.appendChild(li);

    console.log(li);
    console.log(tempText);
  }
})
