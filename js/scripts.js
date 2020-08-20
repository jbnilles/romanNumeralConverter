$(document).ready(function () {

  $('#romanNumeral').submit(function () {
    event.preventDefault();

  });

});


//  66
//  LXVI

function integerToRoman (num) {
  const ROMAN = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const VALUES = [1, 5, 10, 50, 100, 500, 1000];
  let result = [];
  let i = ROMAN.length - 1;
  while (num > 0) {
    while ( num >= VALUES[i]){
        result.push(ROMAN[i]);
        num -= VALUES[i];
    }
    i--;
  }
  return result.join('');
}
