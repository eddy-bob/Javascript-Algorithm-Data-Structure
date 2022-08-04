// write an algorithm that is that consoles the numbers from 1-n
//  but for numbers divisible
//  by three with out remainders,console log
//   fizz instead of the number and for
//   numbers divisible by 5 and returns a
//   whole number,console buzz.for numbers which
//    are multiples of both five and three,console fizzbuzz

var n = 15;
function logChar(n) {
  for (let i = 1; i <= n; i++) {
    var divByThree = i % 3;
    var divByFive = i % 5;

    if (divByThree == 0 && divByFive == 0) {
      console.log("fizzbuzz");
    } else if (divByThree == 0) {
      console.log("fizz");
    } else if (divByFive == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
  //   document.write("time complexity =O(1) and the space complexity is  0(1)");
}

logChar(n);
