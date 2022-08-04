// option1
// const reverseNumFunc=(num)=>{
//        let reverseString=num.toString().split("").reverse().join("")

//        if(num.startsWith("-")){
//               console.log(true)

//        reverseString=  reverseString.replace("-","");
//          reverseString=reverseString.padStart(reverseString.length+1,"-")

//        }
//        return reverseString

// };

// option2
// const reverseNumFunc = (num) => {
//   let numString = num.toString();
// let reverseString="";
//   let reverseArr = [];
//   for (let i = numString.length - 1; i >= 0; i--) {
//     reverseArr.push(numString[i]);

//   }
//   reverseString=reverseArr.join("")
//   if (num.startsWith("-")) {

//     reverseString = reverseString.replace("-", "");
//     reverseString = reverseString.padStart(reverseString.length + 1, "-");
//   }
//   return reverseString;
// };

// time complexity of this code is O(log10N) while the space complexity is O(n)
const reverseNumFunc = function (num) {
  let reverse = "";
  num = num
    .toString()
    .replace(/[\W_a-z A-Z]+/g, "")
    .split("");
  return num.reduce((prev, curr) => {
    prev = curr + prev;
    return (reverse = prev);
  }, "");
};
console.log(reverseNumFunc(-450 + "w"));
