// const reversal=(string)=>{

//        let reversed=string.split("").reverse().join("")
//        return reversed

// }
// option2
// const reversal=(string)=>{

//        let stringArr=string.split("");
//        let reverseArr=[];
//        let reverseString=""

//      for(let i=stringArr.length-1;i>=0;i--){

//        reverseArr.push(stringArr[i])
//      };
// reverseString=reverseArr.join("");
// return reverseString
// }
// the big O notation or time complexity of this code is  0(N) while the space complexity is O(N)
const reversal = function (string) {
  string = string.replace(/[\W_ 0-9]+/g, "").split("");
  let reverse = "";
  return string.reduce((prev, curr) => {
    prev = curr + prev;
    return prev;
  }, "");
};
console.log(reversal("bottomBelle"));
