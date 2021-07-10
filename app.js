// Take 1st Element of an array And check to see,
// if the sum of any 2 elements in that array
// is equal to the 1st element of the array or not?
// And output this pair in the console.

let arr = [5, 3, 2, 7, -2, 1, 4];

let sum = 0;

function challengeArr(arr) {
  let first = arr[0];
  console.log(`First Element: ${first}`);
  console.log(`Elements whose sum is equal to the First Element:`);
  
  for (i = 1; i <= arr.length; i++) {    
    for (j = i; j <= arr.length; j++){

      if(first === (arr[i] + arr[j])) {
        console.log(arr[i], arr[j]);
      }
    }
  }

}

challengeArr(arr);