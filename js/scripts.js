$(document).ready(function () {
  $('#romanNumeral').submit(function () {
    event.preventDefault();
    $('#result').text(integerToRoman(parseInt($('#userInput').val())));
  });
});
///        9
function integerToRoman (num) {
  const ROMAN = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  const VALUES = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let result = [];
  for  (let i = ROMAN.length - 1; num > 0 && num <= 3999; i--) {
    while ( num >= VALUES[i]){
        result.push(ROMAN[i]);
        num -= VALUES[i];
    }
  }
  return result.join('');
}
// function integerToRoman (num) {
//   let result = [];
//   while (num > 0) {
//     if(num >= 1000) {
//       for(let j = 0; j < num / 1000; j++) {
//         result.push('M');
//         num -= 1000;
//       }
//     }
//     else if (num >= 500) {
//       if(num >= 900) 
//       {
//         result.push('CM');
//         num -= 900;
//       }
//       else
//       {
1//         for(let j = 0; j < num / 500; j++) {
//           result.push('D');
//           num -= 500;
//         }
//       }
//     }
//     else if (num >= 100){
//       if(num >= 400) {
//         result.push('CD');
//         num -= 400;
//       }
//       else {
//         for(let j = 0; j < num / 100; j++) {
//           result.push('X');
//           num -= 100;
//         }
//       }
//     }
//     else if (num >= 50){
//       if(num >= 90) {
//         result.push('XC');
//         num -= 90;
//       }
//       else {
//         for(let j = 0; j < num / 50; j++) {
//           result.push('L');
//           num -= 50;
//         }
//       }
//     }
//     else if (num >= 10){
//       if(num >= 40)
//       {
//         result.push('XL');
//         num -= 40;
//       }
//       else {
//         for(let j = 0; j < num / 10; j++) {
//           result.push('X');
//           num -= 10;
//         }
//       }
//     }
//     else if (num >= 5){
//       if(num >= 9)
//       {
//         result.push('IX');
//         num -= 9;
//       }
//       else {
//         for(let j = 0; j < num / 5; j++) {
//           result.push('V');
//           num -= 5;
//         }
//       }
//     }
//     else if (num >= 1){
//       if(num >= 4)
//       {
//         result.push('IV');
//         num -= 4;
//       }
//       else {
//         for(let j = 0; j < num / 1; j++) {
//           result.push('I');
//           num -= 1;
//         }
//       }
//     }
//   }
//   return result.join('');
// }
