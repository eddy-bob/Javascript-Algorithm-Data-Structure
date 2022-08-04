// the time complexity of this code is O(n) while the time complexity is O(N)
const consonants = function (string) {
  let consonants = 0;

  let vowelsAlpha = ["a", "e", "i", "o", "u"];

  string
    .toLowerCase()
    .split("")
    .forEach((element) => {
      if (!vowelsAlpha.includes(element)) {
        consonants = consonants + 1;
      }
    });
  console.log(consonants);
};
consonants("damburaubanka");
