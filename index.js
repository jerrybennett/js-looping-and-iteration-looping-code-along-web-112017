// invokes console.log() once for each element in the passed-in array ‣
// prints out a welcome badge for each employee ‣
// returns the passed-in array ‣
function printBadges(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    console.log('Welcome ' + arr[i] + '! You are employee #'+ (i + 1) + '.'); 
  }

  return arr;
}

// invokes Math.random() to simulate coin flips ‣
// returns the number of "Tails" flips in a row ‣
// loops indefinitely until a flip results in "Heads"
function tailsNeverFails() {

  let tails = 0;

  function unknown () {
    return Math.random() >= 0.5;
  }

  while (unknown()) {
    tails++;
  }

  return 'You got ' + tails + ' tails in a row!';
}