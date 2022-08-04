// the time complexity of this code is O(n) while the time complexity is O(N)
const vowels = function (string) {
  let vowels = 0;

  let vowelsAlpha = ["a", "e", "i", "o", "u"];

  string
    .toLowerCase()
    .split("")
    .forEach((element) => {
      if (vowelsAlpha.includes(element)) {
        vowels = vowels + 1;
      }
    });
  console.log(vowels);
};
vowels("damburaubanka");
