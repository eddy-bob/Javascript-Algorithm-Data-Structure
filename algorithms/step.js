// the time complexity of this code is O(n) while the space time complexity of this code is O(1)
const step = function (step) {
  for (let i = 1; i <= step; i++) {
    console.log("#".repeat(i).padStart(step, " "));
  }
};
step(10);
