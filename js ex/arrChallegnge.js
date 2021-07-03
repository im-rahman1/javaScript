let arr = [5, 3, 2, 7, -2, 1, 4];

let sum = 0;

function challengeArr(arr) {
  let first = arr[0];
  
  for (i = 1; i <= arr.length; i++) {    
    for (j = i; j <= arr.length; j++){

      if(first === (arr[i] + arr[j])) {
        console.log(arr[i], arr[j]);
      }
    }
  }

}

challengeArr(arr);