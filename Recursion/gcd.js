
// function gcd(num1, num2) {
    
//     while (num1) {
//         let temp = num1
//         num1 = num2 % num1
//         num2 = temp
//     }
//     return num2
// }

// console.log(gcd(48, 18));


function gcd(num1, num2) {
  if (num1 === num2) {
    return num1;
  }

  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  } else {
    return gcd(num1, num2 - num1);
  }
}

// console.log(gcd(48, 18));
// console.log(gcd(56, 98));
// console.log(gcd(101, 103));


