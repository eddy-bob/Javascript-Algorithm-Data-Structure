// return the letter most commonly used in the string provided

// const maxChar=(str)=>{
// let strArr=str.split("").sort()

// let maxLetter="";
// let maxCount=0;
// let newArr={}
// for(let i=0;i<strArr.length;i++){
//      let char=strArr[i]
//      newArr[char]=newArr[char]+1||1

//      if( newArr[char]>maxCount){
//             maxLetter=char;
//             maxCount=newArr[char]
//      }

// }

// console.log(maxLetter)
// return maxLetter
// }
const maxChar = function (string) {
  let letterCount = {};

  for (let i = 0; i < string.length; i++) {
    letterCount[string.charAt(i)] = letterCount[string.charAt(i)] + 1 || 1;
  }
  console.log(letterCount);
  console.log(
    Object.values(letterCount).sort((a, b) => {
      return b - a;    })[0]
  );
};
maxChar("i looooooooooooove yooooou");
